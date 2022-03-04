import { ChangeEvent, useEffect, useState } from 'react';
import fetchOptions from '../../services/fetchOptions';
import Option from './Option'
import './styles.css'

const AutocompleteInput = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);
  const [list, setList] = useState([] as any)


  const handleChange = async (event: ChangeEvent<{ value: string }>) => {
    const { value } = event.target || {};
    setInputValue(value);
  };

  useEffect(() => {
    async function handleOptions () {
      if (inputValue) {
        const resp: any = await fetchOptions(inputValue);
        setOptions(resp);
      } else {
        setOptions([]);
      }
    }
    handleOptions();
  }, [inputValue]);


  useEffect(() => {
    setList(options)
  }, [options])

	return (
		<div className="AutocompleteInput">
			<input
        type="text"
        placeholder="Search by name"
        value={inputValue}
        onChange={handleChange}
      />
      <div className="dropdown">
        {list.map((item: string) => <Option search={inputValue} onClick={handleChange} key={item}>{item}</Option>)}
      </div>
		</div>
	)
};

export default AutocompleteInput;

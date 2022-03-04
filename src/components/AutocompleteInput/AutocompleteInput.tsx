import { ChangeEvent, useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import fetchOptions from '../../services/fetchOptions';

import { useDebounce } from '../../hooks/useDebounce';
import './styles.css'

const AutocompleteInput = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);

  const debouncedValue = useDebounce(inputValue, 300);

  const handleChange = async (event: ChangeEvent<{ value: string }>) => {
    const { value } = event.target || {};
    setInputValue(value);
  };

  useEffect(() => {
    async function handleOptions () {
      if (debouncedValue) {
        const resp: any = await fetchOptions(debouncedValue);

        if (JSON.stringify(resp) !== JSON.stringify(options)) setOptions(resp);
      } else {
        setOptions([]);
      }
    }
    handleOptions();
  }, [debouncedValue])


	return (
		<div className="AutocompleteInput">
			<input
        type="text"
        placeholder="Search for a city"
        value={inputValue}
        onChange={handleChange}
      />
      <Dropdown search={inputValue} options={options} handleChange={handleChange} />
		</div>
	)
};

export default AutocompleteInput;

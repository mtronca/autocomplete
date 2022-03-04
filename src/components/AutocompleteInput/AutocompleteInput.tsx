import { ChangeEvent, useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import fetchOptions from '../../services/fetchOptions';

import { useDebounce } from '../../hooks/useDebounce';
import './styles.css'

const AutocompleteInput = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [displayValue, setDisplayValue] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);

  const debouncedValue = useDebounce(inputValue, 300);

  const handleChange = async (event: ChangeEvent<{ value: string }>) => {
    const { value } = event.target || {};
    setInputValue(value);
  };

  const handleClick = (value: string) => {
    setDisplayValue(value);
    setOptions([]);
  }

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

  useEffect(() => {
    setDisplayValue(inputValue);
  }, [inputValue])

	return (
		<div className="AutocompleteInput">
			<input
        type="text"
        placeholder="Search for a city"
        value={displayValue}
        onChange={handleChange}
      />
      <Dropdown search={inputValue} options={options} handleChange={handleClick} />
		</div>
	)
};

export default AutocompleteInput;

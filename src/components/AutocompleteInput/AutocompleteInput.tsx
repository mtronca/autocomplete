import { ChangeEvent, useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import fetchOptions from '../../services/fetchOptions';

import { useDebounce } from '../../hooks/useDebounce';
import './styles.css'

const AutocompleteInput = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);

  const debouncedValue = useDebounce(searchTerm, 300);

  const handleChange = async (event: ChangeEvent<{ value: string }>) => {
    const { value } = event.target || {};
    setSearchTerm(value);
  };

  const handleClick = (value: string) => {
    setInputValue(value);
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
    setInputValue(searchTerm);
  }, [searchTerm])

	return (
		<div className="AutocompleteInput">
			<input
        type="text"
        placeholder="Search for a city"
        value={inputValue}
        onChange={handleChange}
      />
      <Dropdown search={searchTerm} options={options} handleChange={handleClick} />
		</div>
	)
};

export default AutocompleteInput;

import { memo, useEffect, useState } from 'react';
import Option from './Option'
import './styles.css'

interface IDropdown {
  search: string;
  options: string[];
  handleChange: Function;
}

const Dropdown = ({ search, options, handleChange }: IDropdown) => {
  const [list, setList] = useState([] as any)

  useEffect(() => {
    setList(options)
  }, [options])

  const renderOptions = () => {
    return list.map((item: string) => <Option search={search} onClick={handleChange} key={item}>{item}</Option>)
  }

	return (
		<div className="dropdown">{renderOptions()}</div>
	)
};

export default memo(Dropdown);

import { useState, useEffect } from 'react';
import './styles.css'

interface IOption {
	onClick: Function;
	search: string;
  	children: string;
}

const Option = ({ onClick, search, children }: IOption) => {
	const [text, setText] = useState(children);

	useEffect(() => {
		const regex = new RegExp(search, 'gi');
		const newText = children.replace(regex, '<mark>$&</mark>')
		setText(newText);
	}, [search]);

	return (
		<div className="option"
			onClick={() => onClick({ target: { value: children }}, true)}
			dangerouslySetInnerHTML={{ __html: text }}
		/>
	)
};

export default Option;

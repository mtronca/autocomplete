import { ReactChild } from "react";
import './styles.css'

interface IContainer {
	children: ReactChild | ReactChild[]
}

const Container = ({ children }: IContainer) => {
	return (
		<div className="Container">
			{children}
		</div>
	)
};

export default Container;

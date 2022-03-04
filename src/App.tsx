
import './global.css';

import Container from "./components/Container/Container";
import AutocompleteInput from './components/AutocompleteInput/AutocompleteInput';

const App = () => {
	return (
		<Container>
			<h1>City Autocomplete</h1>
			<AutocompleteInput/>
		</Container>
	)
};

export default App;

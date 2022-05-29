import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import Home from './Pages/Home';

function App() {
	fetch();

	return (
		<>
			<Home />
			<SearchBar />;
		</>
	);
}

export default App;

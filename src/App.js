import { useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import Card from './components/card/card.component';

const App = () => {
	console.log('render');
	const [searchField, setSearchField] = useState('a'); // [value, setValue]
	console.log(searchField);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>
			{
				<SearchBox
					onChangeHandler={onSearchChange}
					placeholder='Search monsters'
					className='monsters-search-box'
				/> /*
			<CardList monsters={filterNames} /> */
			}
		</div>
	);
};

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			monsters: [],
// 			filteredMonsters: [],
// 			searchField: '',
// 		};
// 	}

// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then((response) => response.json())
// 			.then((users) =>
// 				this.setState(() => {
// 					return { monsters: users };
// 				})
// 			);
// 	}

// 	onSearchChange = (event) => {
// 		const searchField = event.target.value.toLocaleLowerCase();
// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};

// 	render() {
// 		console.log('render from AppJS');
// 		const { monsters, searchField } = this.state;
// 		const { onSearchChange } = this;

// 		const filterNames = monsters.filter((ev) => {
// 			return ev.name.toLowerCase().includes(searchField);
// 		});
// 		return (
// 			<div className='App'>
// 				<h1 className='app-title'>Monsters Rolodex</h1>
// 				<SearchBox
// 					onChangeHandler={onSearchChange}
// 					placeholder='Search monsters'
// 					className='monsters-search-box'
// 				/>
// 				<CardList monsters={filterNames} />
// 			</div>
// 		);
// 	}
// }

export default App;

import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
	const [searchField, setSearchField] = useState(''); // [value, setValue]
	// const [title, setTitle] = useState('');
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilterMonsters] = useState(monsters);

	console.log('rendered');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilterNames = monsters.filter((ev) => {
			return ev.name.toLocaleLowerCase().includes(searchField);
		});
		setFilterMonsters(newFilterNames);
	}, [monsters, searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	// const onTitleChange = (event) => {
	// 	const searchFieldString = event.target.value.toLocaleLowerCase();
	// 	setTitle(searchFieldString);
	// };

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>
			<SearchBox
				onChangeHandler={onSearchChange}
				placeholder='Search monsters'
				className='monsters-search-box'
			/>
			<br />
			{/* <SearchBox
				onChangeHandler={onTitleChange}
				placeholder='Set title'
				className='title-search-box'
			/> */}
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;

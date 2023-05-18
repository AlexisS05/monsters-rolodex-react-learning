import { useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { getData } from './util/data.utils';

export type Monster = {
	id: string;
	name: string;
	email: string;
};

const App = () => {
	const [searchField, setSearchField] = useState(''); // [value, setValue]
	// const [title, setTitle] = useState('');
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [filteredMonsters, setFilterMonsters] = useState(monsters);

	console.log('rendered');

	useEffect(() => {
		const fetchUsers = async () => {
			const users = await getData<Monster[]>(
				'https://jsonplaceholder.typicode.com/users'
			);
			setMonsters(users);
		};
		fetchUsers();
	}, []);

	useEffect(() => {
		const newFilterNames = monsters.filter((ev) => {
			return ev.name.toLocaleLowerCase().includes(searchField);
		});
		setFilterMonsters(newFilterNames);
	}, [monsters, searchField]);

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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

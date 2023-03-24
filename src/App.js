import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			filteredMonsters: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) =>
				this.setState(
					() => {
						return { monsters: users };
					},
					() => {
						console.log(this.state);
					}
				)
			);
	}

	onSearchChange = (event) => {
		const searchField = event.target.value.toLocaleLowerCase();
		this.setState(
			() => {
				return { searchField };
			},
			() => {
				console.log(this.state);
			}
		);
	};

	render() {
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const filterNames = monsters.filter((ev) => {
			return ev.name.toLowerCase().includes(searchField);
		});
		return (
			<div className='App'>
				<input
					className='search-box'
					type='search'
					placeholder='Search monsters'
					onChange={onSearchChange}
				></input>
				{filterNames.map((mon) => {
					return (
						<div key={mon.id}>
							<h1>{mon.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;

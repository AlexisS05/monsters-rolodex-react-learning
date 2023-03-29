import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
	render() {
		// console.log(this.props);
		// console.log('render from CardList');
		const { monsters } = this.props;
		return (
			<div className='card-list'>
				{monsters.map((monster) => {
					return <Card monsters={monster} key={monster.id} />;
				})}
			</div>
		);
	}
}
export default CardList;

import './Card-List.css';
import Card from '../card/Card';

const CardList = ({ monsters }) => (
	<div className='card-list'>
		{monsters.map(monster => (
			<Card key={monster.id} monster={monster} />
		))}
	</div>
);
export default CardList;

/* import { Component } from 'react';
import "./card-list.styles.css";
import Card from '../card/card.component';

class CardList extends Component {
    render() {
        const { clubs } = this.props;
        return (
            <div className='card-list'>
                {clubs.map((club) => {
                return (
                    <Card club={club} />
                      );
                })}
            </div>
            )
    }
}

export default CardList; */

import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({clubs}) => (
            <div className='card-list' >
                {clubs.map((club) => {
                return (
                    <Card club={club} key={`${club.code}`}/>
                      );
                })}
            </div>
            
)

export default CardList;
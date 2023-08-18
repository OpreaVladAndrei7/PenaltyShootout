/*  import { Component } from "react";
 import "./card.styles.css";
 
 class Card extends Component{
    render(){
    const {name, code, kitURL} = this.props.club;
    return(
            
            <div className='card-container' key={code}>
                <img alt={`kit ${code}`} src={`${kitURL}`} />
                <h2>{name}</h2>
            </div>
        );    
    }
}
export default Card; */

import "./card.styles.css";

const Card = ({club}) => {
    const {name, code, kitURL} = club;
            return(
            <div className='card-container'>
                <img alt={`kit ${code}`} src={`${kitURL}`} />
                <h2>{name}</h2>
            </div>
            )
    }

export default Card;
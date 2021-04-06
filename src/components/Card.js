import React from 'react';
import {Link} from 'react-router-dom';
import {Heading} from './Heading';

function Card(props) {
    return(
        <>
        <a href = {props.href} target='_blank'>
        <div className='card__item'
        id={props.id}>
            {/* <Link className='card_item_link' to={props.path}></Link> */}
                <div className="card__item__container">
                    <div className="card__title">
                        <Heading text={props.title} 
                            headingSize="h2" 
                            headingStyle="heading--plain"/>   
                    </div>
                    <div className="card__item__info">
                        <p>{props.text}</p>
                    </div> 
                </div>
                <div className="card__tags">
                    <p>{props.tag1}</p>
                    <p>{props.tag2}</p>
                    <p>{props.tag3}</p>
                </div>
        </div>
        </a>
        </>
    )
}

export default Card;
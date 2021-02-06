import './Card.css';
import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <h4 className="card-subtitle">
                {props.subtitleIcon ? <i className={props.subtitleIcon} /> : null}
                {props.subtitle}
            </h4>
            <h2 className="card-title">{props.title}</h2>

            <div className="card-content">
                <>{props.children}</>
            </div>
        </div>
    );
}

export default Card;
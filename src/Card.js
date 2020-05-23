import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div>
            <img alt='robots'
            src={`https://robohash.org/${id}?200x200`} />
            <h2>{ name }</h2>
            <p>{ email }</p>
        </div>
    )
}


export default Card;
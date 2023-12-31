import React from 'react';
import Card from './Card';

const Cards = ({ cards }) => {

    

    return (
        <div className='my-36'>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                cards ?.map(card => <Card key={card.id} card={card}></Card>)
            }
            </div>
        </div>
    );
};

export default Cards;
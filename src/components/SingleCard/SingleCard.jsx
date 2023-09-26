import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const SingleCard = () => {

    const [card, setcard] = useState()

    const {id} = useParams()
    

    const singleCard = useLoaderData()

    useEffect(() => {
        const findCard = singleCard?.find(findCard => findCard.id == id)
        setcard(findCard)
    }, [id, singleCard])


    return (
        <div>
            <Card card={card}></Card>
        </div>
    );
};

export default SingleCard;
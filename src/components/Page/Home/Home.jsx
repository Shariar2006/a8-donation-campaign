import React from 'react';
import Cards from '../../Cards/Cards';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const cards = useLoaderData()
    

    return (
        <div>
            <div className='h-screen bg-cover bg-[url("https://i.ibb.co/bvj3Vvq/Clothing.png")] bg-center opacity-10 bg-no-repeat '>
            </div>

            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;
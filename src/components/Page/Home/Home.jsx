import React from 'react';
import Cards from '../../Cards/Cards';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const cards = useLoaderData()


    return (
        <div>
            <div style={{  height: "80vh", opacity: 0.1, backgroundImage: `url(${"https://i.ibb.co/bvj3Vvq/Clothing.png"})` }} className='h-[80vh] bg-cover bg-center bg-no-repeat '>

            </div>
            <h1 className='absolute -mt-20 block mx-auto text-4xl font-bold text-black'>I Grow By Helping People In Need</h1>

            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;
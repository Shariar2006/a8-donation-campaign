import React from 'react';
import Cards from '../../Cards/Cards';
import { useLoaderData } from 'react-router-dom';


const Home = () => {

    const cards = useLoaderData()


    return (
        <div>
            <div style={{ height: "80vh", opacity: 0.1, position: 'relative', backgroundImage: `url(${"https://i.ibb.co/bvj3Vvq/Clothing.png"})` }} className=' h-[80vh] bg-cover bg-center bg-no-repeat '>

            </div>
            <div className='absolute -mt-80 ml-80 block mx-auto'>
                <h1 className=' text-4xl font-bold text-black'>I Grow By Helping People In Need</h1>
                <div className='mt-4 ml-8'>
                    <input className='p-3 w-4/5	border	border-slate-500' type="search" placeholder='Search hear' name="" id="" />
                    <span className='text-white bg-red-600 p-[14px]'><button>

                        Search</button></span>
                </div>
            </div>

            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;
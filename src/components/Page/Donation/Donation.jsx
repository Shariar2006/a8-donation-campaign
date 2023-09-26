import React, { useEffect, useState } from 'react';
import DonationCard from './DonationCard';

const Donation = () => {


    const [donate, setdonate] = useState([])

    const [noFound, setNoFound] = useState(false)

    const [issee, setIsSee] = useState(false)

    const deleteAll = () => {
        localStorage.clear()
        setdonate([])
        setNoFound("You did not donate!")
    }


    useEffect(() => {
        const donateItem = JSON.parse(localStorage.getItem('donate'))

        if (donateItem) {
            setdonate(donateItem)
        }
        else {
            setNoFound("You did not donate!")
        }


    }, [])

    return (
        <div>
            {
                noFound ? <p className='h-[80vh] flex justify-center items-center text-2xl font-bold'>{noFound}</p> :
                    <div>
                        {
                            donate.length > 0 && <button onClick={deleteAll} className='text-white text-2xl font-semibold mt-4 p-2 rounded-lg block mx-auto bg-green-600'>Deleted All</button>
                        }

                        <div className='grid grid-cols-2 gap-5 my-5'>
                            {
                                issee ? donate.map(donateCard => <DonationCard key={donateCard.id} donateCard={donateCard}></DonationCard>) :
                                    donate.slice(0, 4).map(donateCard => <DonationCard key={donateCard.id} donateCard={donateCard}></DonationCard>)
                            }
                        </div>
                        {
                            donate.length > 4 && <button onClick={() => setIsSee(!issee)} className='text-white text-2xl font-semibold mb-4 p-2 rounded-lg block mx-auto bg-green-600'> {issee ? "See Less" : "See All"}</button>
                        }
                    </div>
            }
        </div>
    );
};

export default Donation;
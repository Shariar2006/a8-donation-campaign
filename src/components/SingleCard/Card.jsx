import React from 'react';
import swal from 'sweetalert';

const Card = ({ card }) => {
    const { id, title, description, img, text_color, price } = card || {}

    const addToDonation = () => {

        const addDonation = []

        const donateItem = JSON.parse(localStorage.getItem('donate'))


        if (!donateItem) {
            addDonation.push(card)
            localStorage.setItem('donate', JSON.stringify(addDonation))
            swal("Good job!", "You have donated successfully!", "success")
            
        }
        else {

            const isExist = donateItem?.find(card => card.id === id)


            if (isExist) {
                swal("Sorry!", "You have already donated!", "error")
            }
            else {
                addDonation.push(...donateItem, card)
                localStorage.setItem('donate', JSON.stringify(addDonation))
                swal("Good job!", "You have donated successfully!", "success")
                
            }


        }

    }

    return (
        <div>
            <div className="relative flex max-w-[1000px] mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="overflow-hidden  bg-clip-border text-white ">
                    <img className='w-full mx-auto'
                        src={img}
                    />
                </div>
                <div className="p-6 pt-3 absolute mt-[209px] md:mt-[419px] lg:mt-[538px] md:h-10 lg:h-20 w-full bg-black/60">
                    <button style={{ backgroundColor: text_color }}
                        className="absolute -mt-3 lg:mt-1  w-[100px] lg:w-[180px] select-none rounded-lg p-1 lg:p-4  text-center align-middle font-sans text-[10px] lg:text-sm font-bold uppercase text-white"
                        onClick={addToDonation}
                    >



                        Donate ${price}.00
                    </button>
                </div>
                <div className="p-2">
                    <div className="mb-3 flex items-center justify-between">
                        <h5 className="block text-2xl font-bold leading-snug tracking-normal text-black antialiased">
                            {title}
                        </h5>

                    </div>
                    <p className="block font-sans text-lg font-light leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Card;
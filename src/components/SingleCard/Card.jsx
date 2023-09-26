import React from 'react';

const Card = ({ card }) => {
    const { id, title, description, img, text_color, } = card || {}
    return (
        <div>
            <div className="relative flex max-w-[1000px] mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="overflow-hidden  bg-clip-border text-white ">
                <img className='w-full mx-auto'
                        src={img}
                    />
                </div>
                <div className="p-6 pt-3 absolute mt-[229px] md:mt-[442px] lg:mt-[543px] lg:h-20 w-full bg-black/60">
                        <button style={{ backgroundColor: text_color }}
                            className="absolute  w-[100px] lg:w-[180px] select-none rounded-lg p-1 lg:p-4  text-center align-middle font-sans text-xs lg:text-sm font-bold uppercase text-white"
                            type="button"
                            data-ripple-light="true"
                        >

{/* -mt-10 ml-8 md:-mt-12 md:ml-20 lg:-mt-20 lg:ml-36 */}

                            Donate $290
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
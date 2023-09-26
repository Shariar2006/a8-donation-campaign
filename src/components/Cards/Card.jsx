import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { id, title, category, img, text_color, bg_color, card_bg_color } = card || {}


    return (
        <div>
            <Link to={`/cards/${id}`}>
                <div style={{ backgroundColor: card_bg_color }} className=" flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className=" mx-4 mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                        <img
                            src={img}
                            
                        />
                    </div>
                    <div className="p-6">
                        <h5 style={{ color: text_color, backgroundColor: bg_color, width: "30%", padding: "3px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px" }} className="block font-sans text-base font-semibold leading-relaxed text-inherit antialiased  ">
                            {category}
                        </h5>
                        <p style={{ color: text_color }} className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title}
                        </p>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default Card;
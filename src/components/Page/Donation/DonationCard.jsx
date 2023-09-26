import React from 'react';

const DonationCard = ({ donateCard }) => {

    const { id, title, category, img, text_color, bg_color, card_bg_color, price } = donateCard || {}

    return (
        <div>
            <div style={{ backgroundColor: card_bg_color }} className="relative flex flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 shrink-0 overflow-hidden rounded-xl rounded-r-none ">
                    <img
                        src={img}
                    />
                </div>
                <div className="p-6">
                    <h5 style={{ color: text_color, backgroundColor: bg_color, width: "50%", padding: "3px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px" }} className="block font-sans text-base font-semibold leading-relaxed text-inherit antialiased  ">
                        {category}
                    </h5>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-black antialiased">
                        {title}
                    </h4>
                    <p style={{color: text_color}} className="text-xl font-semibold leading-relaxed text-gray-700 antialiased">
                       ${price}
                    </p>
                    <a className="inline-block" href="#">
                        <button style={{backgroundColor: text_color}}
                            className="text-white p-2 rounded-[4px] font-semibold"
                            type="button"
                        >
                            View Details
                           
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;
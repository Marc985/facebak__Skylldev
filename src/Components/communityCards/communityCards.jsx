import React from "react";

const ComunityCards = ({ title, image, descriptions }) => {
    return (
        <div className="container mx-auto">
            <div class="max-w-xs min-w-[18rem] rounded overflow-hidden border-2 border-gray-700 mx-auto">
                <img class="w-full" src={image} />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{title}</div>
                    <p class="text-gray-400 text-base text-justify">
                        {descriptions}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-md px-3 pt-3 pb-2 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
                        <a href="#join">Join Community</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ComunityCards;

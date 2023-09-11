import React from "react";

const Footer = () => {
    return (
        <footer className="py-3 px-5">
            <div className="text-[0.8rem] text-gray-400 flex flex-wrap gap-2 justify-center text-center mb-5">
                <a href="">About</a>
                <a href="">Blog</a>
                <a href="">Help</a>
                <a href="">Confidentiality</a>
                <a href="">Conditions</a>
                <a href="">Localisation</a>
                <a href="">Threads</a>
                <a href="">Hashtags</a>
                <a href="">Language</a>
            </div>

            <div>
                <p className="text-[0.7rem] text-gray-400 text-center">
                    © 2023 - copyright - made by skylledev.Inc
                </p>
            </div>
        </footer>
    );
};

export default Footer;

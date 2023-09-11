import React from "react";

const Event = (icon, title, date, description) => {
    return (
        <div>
            <div className="event">
                <div className="event__container">
                    <div className="flex">
                        {icon}
                        <h2>{title}</h2>
                    </div>
                    <div>
                        <p>{date}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;

import React from "react";

const Comment = ({img,commentContent,userName}) => {
    return (
        <div>
            <div className="mt-3 border-t-[4px] border-gray-800">
                <div className="flex gap-3 mt-3">
                    <img
                        src={img}
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="text-white font-semibold">{userName}</p>
                        <p className="text-[0.7rem] text-gray-400">
                            {commentContent}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
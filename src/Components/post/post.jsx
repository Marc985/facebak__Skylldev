import React from "react";

import * as Dialog from "@radix-ui/react-dialog";

import { BsStopwatch, BsEmojiSmile } from "react-icons/bs";
import {
    AiOutlineLike,
    AiOutlineDislike,
    AiOutlineLink,
    AiOutlineClose,
} from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { MdOutlineModeComment } from "react-icons/md";
import { HiOutlineCamera } from "react-icons/hi";
import { BiImageAdd, BiSend } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../../assets/imgs/profile.jpg";
import io from "socket.io-client";

import TextareaForm from "../textareaForm/textareaForm.jsx";
import { addComment } from "@babel/types";
import { async } from "q";
import url from "../../apiUrl/APIURL.jsx";
//socket io

const Post = ({
    description,
    profileImage,
    username,
    postImage,
    postHour,
    hashtag,
    like,
    share,
    comments,
    postId,
}) => {
    const [comment, setComment] = useState({
        content: "",
        userId: "",
    });
    const [isLiked,setIsLiked]=useState(false)

    const [type, setType] = useState("");
    const [id, setId] = useState("");
    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setId(user.id);
        comment.userId = user.id;

        console.log("ty le id" + user.id);
        allReactions()
    }, []);

    const [reaction, setReaction] = useState({
        userId: "",
        type: "",
    });

    const handelReactions = async (type) => {
        try {
            console.log(type);
            const response = await axios.post(
                `${url}/posts/${postId}/reactions`,
                { userId: id, type: type }
            );
                
        } catch (error) {
            console.log(error);
        }
    };
    const allReactions=async (idUser) =>{
        try{
            const res=await axios.get(
                `${url}/posts/${postId}/reactions`
                
            )
        }
        catch(error){
            console.log(error);
        }
    } 
    const deleteReaction = async (type) => {};
    /* useEffect(() => {
        console.log("zany ny id e lele"+id);
    },[]);*/
    const AddComment = async (postId) => {
        try {
            const res = await axios.put(
                `${url}/posts/${postId}/comments`,
                comment
            );
            const a = res.data;
        } catch (err) {
            console.log(err);
        }
        comment.content = "";
    };
    return (
        <section>
            <div className="flex items-center gap-3">
                <img
                    src={profileImage}
                    alt="user_profile"
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <p className="text-white font-semibold">{username}</p>
                    <p className="text-[0.7rem] text-gray-400 flex gap-2">
                        <BsStopwatch /> {postHour}
                    </p>
                </div>
            </div>

            <div className="mt-3">
                <p className="text-white">{description}</p>
                <p className="text-white">{hashtag}</p>

                <div className="mt-3">
                    <div className="h-[30rem]">
                        <img
                            src="https://picsum.photos/seed/picsum/500/400"
                            alt="post_img"
                            className="w-full h-full object-contain rounded-md bg-[#02101b]"
                        />
                    </div>

                    <div className="flex justify-between items-center mt-3">
                        <div className="flex gap-5">
                            <button className=" py-1  text-white flex gap-1 items-center bg-black">
                                <p className="pt-2 text-[0.8rem]">{like}</p>
                                <a
                                    href="#Like"
                                    className="text-xl"
                                    onClick={() => {
                                        handelReactions("LIKE");
                                    }}
                                >
                                    <AiOutlineLike />
                                </a>
                            </button>

                            {/* <button className=" py-1  text-white flex gap-1 items-center">
                                <p className="pt-2 text-[0.8rem]">{}</p>
                                <a
                                    href="#Dislike"
                                    className="text-xl"
                                    onClick={() => {
                                        handelReactions("DISLIKE");
                                        console.log("dislike");
                                    }}
                                >
                                    <AiOutlineDislike />
                                </a>
                            </button> */}

                            <button className=" py-1  text-white flex gap-1 items-center">
                                <p className="pt-2 text-[0.8rem]">{share}</p>
                                <a href="#share" className="text-xl">
                                    <PiShareFatLight />
                                </a>
                            </button>
                        </div>

                        {/* PS : à cliquer pour afficher tout les commentaires du poste*/}

                        <Dialog.Root>
                            <Dialog.Trigger asChild>
                                <div className="Button violet ml-5 flex items-center gap-2 cursor-pointer">
                                    <div className="flex gap-1">
                                        <p className="text-white text-[0.8rem]">
                                            {comments} comments
                                        </p>

                                        <a
                                            href="#allcomments"
                                            className="text-xl"
                                        >
                                            <MdOutlineModeComment />
                                        </a>
                                    </div>
                                </div>
                            </Dialog.Trigger>
                            <Dialog.Portal>
                                <Dialog.Overlay className="DialogOverlay" />
                                <Dialog.Content className="DialogContent bg-[#0c121c] w-[55rem] h-5/6 rounded-md">
                                    <Dialog.Title className="DialogTitle "></Dialog.Title>

                                    <Dialog.Description className="DialogDescription"></Dialog.Description>

                                    <Dialog.Close asChild>
                                        <button
                                            className="IconButton cursor-pointer"
                                            aria-label="Close"
                                        >
                                            <AiOutlineClose />
                                        </button>
                                    </Dialog.Close>
                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>
                    </div>
                </div>

                {/* a field input to comment the post */}
                <div className="my-3 pt-5 border-t-[4px] border-gray-800">
                    <div className="flex gap-4">
                        <img
                            src={Profile}
                            alt=""
                            className="w-10 h-10 rounded-full"
                        />

                        <div className={`flex gap-3 w-full`}>
                            <div
                                className={`bg-gray-800 bg-opacity-70 rounded-md w-full md:flex`}
                            >
                                {/* Text area - Input text for comments */}

                                <TextareaForm
                                    value={comment.content}
                                    onChange={(e) =>
                                        setComment({
                                            ...comment,
                                            content: e.target.value,
                                        })
                                    }
                                    placeholder="Write a comment..."
                                />

                                <div className="flex gap-4 items-center justify-end p-3">
                                    <a href="#photo">
                                        <HiOutlineCamera />
                                    </a>
                                    <a href="#image">
                                        <BiImageAdd />
                                    </a>
                                    <a href="#link">
                                        <AiOutlineLink />
                                    </a>
                                    <a href="#location">
                                        <IoLocationOutline />
                                    </a>
                                    <a href="#emoji">
                                        <BsEmojiSmile />
                                    </a>
                                </div>
                            </div>

                            <button
                                className=" px-3 rounded-md text-gray-50 text-[1.2rem]"
                                onClick={() => AddComment(postId)}
                            >
                                <a href="#send">
                                    <BiSend />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Post;

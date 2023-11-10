import React from "react";
import { HiOutlineCamera } from "react-icons/hi";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineLink } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import Post from "../post/post.jsx";

import Profile from "../../assets/imgs/profile.jpg";
// import Profile2 from "../../assets/imgs/profile2.jpg";
// import Profile3 from "../../assets/imgs/profile3.jpg";
// import Post1 from "../../assets/imgs/post1.jpeg";
// import Post2 from "../../assets/imgs/post2.jpeg";
import Comment from "../comment/comment.jsx";
import TextareaForm from "../textareaForm/textareaForm.jsx";
import ContactList from "../contactList/contactList.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import url from "../../apiUrl/APIURL.jsx";
// import { async } from "q";
import io from "socket.io-client";
i
const HomeContent = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setUserName(user.username);
        setEmail(user.email);
        setId(user.id);
    }, []);
    // if(username==null || email==null || id==null){
    //     return <div>Please Connect TO your account !</div>
    // }
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        var userIdCont;
        try {
            const response = await axios.get(`${url}/users`);
            setUsers(response.data);

            const userString = localStorage.getItem("user");
            const user = JSON.parse(userString);
            const userEmail = user.email;

            const matchingUser = response.data.find(
                (user) => user.email === userEmail
            );
            setCurrentUser(matchingUser);

            if (matchingUser) {
                var currentUserId = matchingUser.id;
                userIdCont = currentUserId;
            }
        } catch (error) {
            console.error(
                `Erreur lors de la récupération des utilisateurs: ${error}`
            );
        }
        return userIdCont;
    };
    getUsers().then((userIds) => {
        value.userId = userIds;
    });

    const [posts, setPost] = useState(null);
    const [value, setValue] = useState({
        content: "",
        photo: "",
        userId: "",
    });
    const handlePost = async (e) => {
        e.preventDefault();
        // console.log(value);
        try {
            const response = await axios.put(
                `${url}/posts`,
                value
            );
            const postData = response.data;
            setPost(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);
    const [userComments, setUserComments] = useState([]);

    const getPosts = async () => {
        try {
            const res = await axios.get(`${url}/posts`);
            setUserPosts(res.data);
            const updatePostsComments = {};
            for (const post of res.data) {
                const postId = post.id;
                const comments = await getComments(postId);
                updatePostsComments[postId] = comments;
            }
            setUserComments(updatePostsComments);
            console.log(updatePostsComments);
        } catch (err) {
            console.log(err);
        }
    };
    const getComments = async (idPost) => {
        try {
            const res = await axios.get(
                `${url}/posts/${idPost}/comments`
            );
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="grid grid-cols-5 gap-6 my-4 mx-2 md:mx-3 lg:mx-8 xl:mx-10 xl:gap-12">
            {/* --------------------  right Side --> Correspond aux Posts---------------------- */}

            <div className="col-span-4 lg:col-span-3 max-w-[745px] my-0 mx-auto">
                {/*------------- Input field of feeds -------------*/}

                <div className="bg-transparent p-3 rounded-md border-[1px] border-gray-800">
                    <div className="flex items-center gap-3">
                        <img
                            src={Profile}
                            alt=""
                            className="w-10 h-10 rounded-full"
                        />

                        {/* Textarea - Input Texts */}

                        <TextareaForm
                            placeholder="What's in your mind ?"
                            bg
                            value={value.content}
                            onChange={(e) =>
                                setValue({ ...value, content: e.target.value })
                            }
                        />
                    </div>

                    <div className="flex justify-between">
                        <div className="flex gap-4 pt-5 items-center">
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

                        {/* Btn submint feed => CANCEL or POST */}
                        <div className="flex gap-4 pt-5">
                            <button className="bg-gray-800 px-5 py-1 rounded-md text-white">
                                <a href="#cancel" className="text-[0.8rem]">
                                    Cancel
                                </a>
                            </button>
                            <button className="bg-transparent border-[3px] border-gray-800 px-5 py-1 rounded-md text-white">
                                <a
                                    href="#post"
                                    className="text-[0.8rem]"
                                    onClick={handlePost}
                                >
                                    Post
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                {/*------------- Latest post by friends/others (ici y'aura la liste des publications XD) -------------*/}
                <div className="mt-5">
                    {/*  <div className="bg-gray-900 border-[1px] border-solid  border-gray-700  rounded-md p-2 mb-5">
                        <Post
                            description={
                                <div>
                                    <p>Pushing Our Physical Limits 🏋️‍♂️💪</p>
                                    <p>
                                        Join us on the quest for ultimate
                                        physical performance, from intense
                                        training sessions to the satisfaction of
                                        pushing boundaries. If you're seeking
                                        motivation to go beyond, don't miss this
                                        story.
                                    </p>
                                </div>
                            }
                            profileImage={Profile2}
                            username="Jane Smith"
                            postImage={Post1}
                            postHour="2h ago"
                            hashtag={
                                <div className="flex gap-2">
                                    <a
                                        href="#hashtag"
                                        className="text-[0.8rem] text-blue-500"
                                    >
                                        #fitness
                                    </a>
                                    <a
                                        href="#hashtag"
                                        className="text-[0.8rem] text-blue-500"
                                    >
                                        #workout
                                    </a>
                                    <a
                                        href="#hashtag"
                                        className="text-[0.8rem] text-blue-500"
                                    >
                                        #gym
                                    </a>
                                </div>
                            }
                            like="1K"
                            share="58"
                            comments="13"
                        />
                    </div>

                    <div className="bg-gray-900 border-[1px] border-solid  border-gray-700  rounded-md p-2 mb-5">
                        <Post
                            description={
                                <div>
                                    <p>Outfit Of the Day ❤️</p>
                                </div>
                            }
                            profileImage={Profile3}
                            username="Dylan scott"
                            postImage={Post2}
                            postHour="4h ago"
                            hashtag={
                                <div className="flex gap-2">
                                    <a
                                        href="#hashtag"
                                        className="text-[0.8rem] text-blue-500"
                                    >
                                        #fashion
                                    </a>
                                    <a
                                        href="#hashtag"
                                        className="text-[0.8rem] text-blue-500"
                                    >
                                        #ootd
                                    </a>
                                    <a
                                        href="#hashtag"
                                        className="text-[0.8rem] text-blue-500"
                                    >
                                        #style
                                    </a>
                                </div>
                            }
                            like="2K"
                            share="100"
                            comments="50"
                        />
                        </div>*/}

                    {userPosts.map((userPost, index) => (
                        <div
                            key={index}
                            className="border-[1px] border-solid  border-gray-700  rounded-md p-2 mb-5"
                        >
                            <Post
                                description={
                                    <div>
                                        <p>{userPost.title}</p>
                                        <p>{userPost.content}</p>
                                    </div>
                                }
                                profileImage={userPost.user.photo}
                                username={userPost.user.username}
                                postImage={userPost.photo}
                                postHour={userPost.createdAt}
                                /*

                   
                                {userPosts.map((userPost, index)=>(
                                   
                                    <div key={index} className="bg-gray-900 border-[1px] border-solid  border-gray-700  rounded-md p-2 mb-5">
                                            <Post
                            description={
                                <div>
                                    <p>{userPost.content}</p>
                                </div>
                            }
                            profileImage={userPost.user.photo}
                            username={userPost.user.username}
                            postImage={userPost.content}
                            postHour={userPost.createdAt}
                            /*
                        hashtag={
                                hashtag={27815cff-f4c6-4a1b-a24f-024cbe65f9c0

                                <div className="flex gap-2">
                                    <a
                                        href="#hashtag"
                                        className="text-[0.8rem] text-blue-500"
                                    >
                                        #fashion
                                    </a>
                                    <a
                                        href="#hashtag"
                                        className="text-[0.8rem] text-blue-500"
                                    >
                                        #ootd
                                    </a>
                                    <a
                                        href="#hashtag"
                                        className="text-[0.8rem] text-blue-500"
                                    >
                                        #style
                                    </a>
                                </div>
                            }
                        */
                                like={userPost._count.reactions}
                                share="100"
                                comments={userPost._count.comments}
                                postId={userPost.id}
                            />
                            {userComments[userPost.id] &&
                                userComments[userPost.id].map(
                                    (comment, indexComment) => (
                                        <div key={comment.id}>
                                            <Comment
                                                img={Profile}
                                                commentContent={comment.content}
                                                userName={comment.user.username}
                                            />
                                        </div>
                                    )
                                )}
                        </div>
                    ))}
                </div>
            </div>

            {/* ------------------------------------------- left Side ------------------------------------------ */}
            <div className="col-span-1 lg:col-span-2 mt-3 md:mt-0">
                <div className="h-fit shadow-[0px_0px_5px_#6a7da0]">
                    <div className="mb-5 p-5">
                        <h3 className="font-bold py-5">Contacts</h3>
                        <ContactList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;

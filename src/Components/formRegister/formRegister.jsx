import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineGoogle } from "react-icons/ai";

import { BsChevronRight } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import url from "../../apiUrl/APIURL";
const FormRegister = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        username: "",
        confirmPassword: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${url}/users`,
                user
            );
          //  localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(user));

            navigate("/home");
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    };
    return (
        <section>
            <div className="h-screen px-6 flex flex-col items-center justify-center">
                <div className="g-6 flex flex-col items-center justify-center h-fit w-full container mx-auto">
                    {/* - Title - */}
                    <div className="mb-16">
                        <h1 className="text-2xl font-semibold">
                            Register to facebak app
                        </h1>
                    </div>

                    <div className="mb-12 md:mb-0 md:w-9/12 lg:w-6/12 xl:w-6/12">
                        <form onSubmit={handleSubmit}>
                            {/* - Username - */}
                            <div
                                className="relative mb-10"
                                data-te-input-wrapper-init
                            >
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="peer text-white bg-transparent h-10 rounded-lg placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-slate-300 focus:outline-none w-[-webkit-fill-available]"
                                    placeholder="Username"
                                    value={user.username}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            username: e.target.value,
                                        })
                                    }
                                />

                                <label
                                    for="email"
                                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-300 bg-black mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-400 peer-focus:text-sm transition-all"
                                >
                                    Username
                                </label>
                            </div>

                            {/* - Emailinput - */}
                            <div
                                className="relative mb-10"
                                data-te-input-wrapper-init
                            >
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="peer text-white bg-transparent h-10 rounded-lg placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-slate-300 focus:outline-none w-[-webkit-fill-available]"
                                    placeholder="Email"
                                    value={user.email}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            email: e.target.value,
                                        })
                                    }
                                />

                                <label
                                    for="email"
                                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-300 bg-black mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-400 peer-focus:text-sm transition-all"
                                >
                                    Email adress
                                </label>
                            </div>

                            {/* - Password input - */}

                            <div class="relative bg-inherit  mb-10">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="peer bg-transparent h-10 rounded-lg text-white placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-slate-300 focus:outline-none w-[-webkit-fill-available]"
                                    placeholder="password"
                                    value={user.password}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            password: e.target.value,
                                        })
                                    }
                                />
                                <label
                                    for="password"
                                    className="absolute cursor-text left-0 -top-3 text-sm text-white bg-black mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-400 peer-focus:text-sm transition-all"
                                >
                                    password
                                </label>
                            </div>

                            {/* - Confirm Password  - */}

                            <div class="relative bg-inherit  mb-10">
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="peer bg-transparent h-10 w-full rounded-lg text-white placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-slate-300 focus:outline-none focus:border-rose-600"
                                    placeholder="Confirm password"
                                    value={user.confirmPassword}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            confirmPassword: e.target.value,
                                        })
                                    }
                                />
                                <label
                                    for="password"
                                    className="absolute cursor-text left-0 -top-3 text-sm text-white bg-black mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-400 peer-focus:text-sm transition-all"
                                >
                                    Confirm password
                                </label>
                            </div>

                            <div className="mb-6 flex items-center justify-between">
                                {/* - Remember me checkbox - */}
                                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative text-white float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                        type="checkbox"
                                        value=""
                                        id="exampleCheck2"
                                    />
                                    <label
                                        className="inline-block pl-[0.15rem] hover:cursor-pointer text-white"
                                        for="exampleCheck2"
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="text-center lg:text-left">
                                {/* - register button - */}
                                <button
                                    type="submit"
                                    className="inline-block rounded px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black bg-white"
                                >
                                    REGISTER
                                </button>

                                {/* - login redirection link - */}
                                <p className="mb-0 mt-5 pt-1 text-sm font-semibold text-white">
                                    Have already an account?
                                    <Link
                                        to="/Login"
                                        className="ms-5 text-red-500 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                    >
                                        Login
                                    </Link>
                                </p>
                            </div>

                            {/* - Separator between social media sign in and email/password sign in - */}
                            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p className="mx-4 mb-0 text-center font-semibold text-white">
                                    Or
                                </p>
                            </div>

                            <div className="flex justify-between items-center mt-10">
                                <div className="flex flex-row items-center justify-center lg:justify-start">
                                    <p className="mb-0 mr-2 text-white text-[0.8rem]">
                                        Continue with google
                                    </p>

                                    {/* - google - */}
                                    <button
                                        type="button"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        className="mx-1  text-white hover:bg-gray-400 "
                                    >
                                        <AiOutlineGoogle />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormRegister;

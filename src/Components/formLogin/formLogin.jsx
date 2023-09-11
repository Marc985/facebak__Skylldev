import { React, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";

import { BsChevronRight } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const FormLogin = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        email: "",
        password: "",
    });
    const [isAuthentified, setIsAuthentified] = useState(false);
    const [showError, setShowError] = useState(false);
    const handleAuthentification = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                "http://localhost:8080/users",
                value
            );
            const userData = response.data;
            if (userData) {
                navigate("/Home");
                console.log(userData);
                setIsAuthentified(true);
            }

            console.log(userData);
            localStorage.setItem("user", JSON.stringify(userData));
        } catch (error) {
            console.log(error);
            setIsAuthentified(false);
            setShowError(true);
        }
    };

    return (
        <div>
            <section className="bg-black">
                <div className="flex flex-col items-center justify-center px-0 md:px-6 py-8 mx-auto h-screen lg:py-0 ">
                    <div className="rounded-lg shadow sm:border md:mt-0 sm:max-w-[35rem] xl:p-0 bg-gray-800 bg-opacity-10 border-gray-700 w-full">
                        <div className="m-6 sm:p-6 space-y-4 md:space-y-6 overflow-x-hidden">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-50 md:text-2xl dark:text-white text-center pb-5">
                                Sign in to your account
                            </h1>
                            <form
                                className="space-y-4 md:space-y-6"
                                action="#"
                                onSubmit={handleAuthentification}
                            >
                                <div className="flex flex-col justify-center items-center">
                                    <label
                                        for="email"
                                        className="block mb-2 text-sm font-medium text-gray-50 dark:text-white w-full"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        value={value.email}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                email: e.target.value,
                                            })
                                        }
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="border text-gray-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-200 dark:text-white focus:ring-gray-200 focus:border-gray-200 w-[-webkit-fill-available]"
                                        placeholder="name@gmail.com"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <label
                                        for="password"
                                        className="block mb-2 text-sm font-medium text-gray-50 dark:text-white w-full"
                                    >
                                        Password
                                    </label>
                                    <input
                                        value={value.password}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                password: e.target.value,
                                            })
                                        }
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="border text-gray-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-200 dark:text-white focus:ring-gray-200 focus:border-gray-200 w-[-webkit-fill-available]"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                for="remember"
                                                className="text-gray-500 dark:text-gray-300"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a
                                        href="#passwd"
                                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>

                                <div className="w-full flex">
                                    <button
                                        type="submit"
                                        className="w-full text-gray-900 bg-gray-50 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        sign in
                                    </button>
                                </div>
                                {!isAuthentified && showError ? (
                                    <div>
                                        your email or password is incorrect
                                    </div>
                                ) : null}
                                {/* - register redirection link - */}
                                <p className="mb-0 mt-5 pt-1 text-sm font-semibold text-white">
                                    Don't have an account?
                                    <Link
                                        to="/Register"
                                        className="ms-5 text-red-500 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                    >
                                        Register
                                    </Link>
                                </p>

                                {/* - Separator between social media sign in and email/password sign in - */}
                                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p className="mx-2 mb-0 text-center font-semibold text-white text-[0.9rem]">
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
                                            <AiOutlineGoogle className="hidden sm:block" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FormLogin;

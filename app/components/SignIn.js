"use client";

import React, { useContext, useState } from "react";

import { authContext } from "../lib/store/auth-context";

import { FcGoogle } from "react-icons/fc";

function SignIn() {
    const { googleLoginHandler } = useContext(authContext);

    return (
        <body className="sign-in-page">
            <main className="flex-col max-w-2xl mx-auto items-end p-28 mt-20">
                <div className="container flex-col items-end max-w-2xl mx-auto">
                    <h1 className="text-6xl text-center font-bold mb-6">Start Saving Today 💵</h1>
                    <p className="font-medium text-xl text-center">with a simpler way to keep track of your finances</p>
                    <button 
                        onClick={googleLoginHandler}
                        className="flex self-start gap-2 p-4 mx-auto mt-6 font-medium text-violet-500 align-middle rounded-lg bg-slate-100">
                        <FcGoogle className="text-2xl"/> Google
                    </button>
                    <p className="align-middle text-xl font-medium text-center mt-4">Log in to get started</p>
                </div>
            </main>
        </body>
    );
}
    

export default SignIn

{/*
<main className="container max-w-2xl px-6 mx-auto">
        <h1 className="mb-6 text-6xl font-bold text-center">Start Saving Today</h1>

        <div className="flex flex-col overflow-hidden shadow-md shadow-slate-500 bg-slate-800 rounded-2xl">
            <div className="h-52">
                <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1593672755342-741a7f868732?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </div>

            <div>
                <h3 className="text-2xl text-center">Sign In To Continue</h3>

                <button 
                    onClick={googleLoginHandler}
                    className="flex self-start gap-2 p-4 mx-auto mt-6 font-medium text-white align-middle bg-gray-700 rounded-lg">
                    <FcGoogle className="text-2xl"/> Google
                </button>
            </div>
        </div>
</main>
*/}
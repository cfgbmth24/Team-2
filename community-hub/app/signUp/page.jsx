
'use client'
import {usePocket} from "@/contexts/pocketContext"
import React, { useRef } from 'react';


export default function SignUpPage() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { pb } = usePocket();

    const handleSubmit = (event) => {
        event.preventDefault(); 

  
        const data = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            passwordConfirm: passwordRef.current.value,
        };


        console.log(data);

        pb.collection("users").create(data).then((res) => {
            console.log(res)
        })
    };

    return (
        <section className="bg-white py-8 px-4 flex justify-center items-start min-h-screen">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl text-black font-bold mb-8">Sign Up Page</h1>
                <form 
                    className="w-full max-w-2xl bg-pink shadow-md rounded px-8 pt-12 pb-8 mb-4"
                    onSubmit={handleSubmit} // Add onSubmit handler
                    action="/your-server-endpoint" // Update action attribute
                    method="POST">

                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-white text-sm font-bold mb-2">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="firstName" 
                            ref={firstNameRef} 
                            name="firstName"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-white text-sm font-bold mb-2">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="lastName" 
                            ref={lastNameRef} 
                            name="lastName"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            ref={emailRef} 
                            name="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            ref={passwordRef} 
                            name="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign Up
                    </button>
                </form>
            </div>
        </section>
    );
}
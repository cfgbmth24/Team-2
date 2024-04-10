'use client'

import { usePocket } from "@/contexts/pocketContext"
import { useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const { pb, login } = usePocket()
    const emailRef = useRef();
    const passwordRef = useRef();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        login(emailRef.current.value, passwordRef.current.value)
        .then((res) => {
            console.log(res);
            //Redirect to the homepage upon successful login
            router.push('/');
        })
        .catch((err) => {
            console.error(err);
        })
    }


    /*function submit(e) {
        e.preventDefault()
        login(emailRef.current.value,passwordRef.current.value )
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }
    */


    return (
        <section className="flex items-center justify-center min-h-screen bg p-6">
            <div className="w-full max-w-[35rem]">
                <img src="/photo.jpeg" className="w-full" />
                <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
                <form className="bg-pink rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            ref={emailRef}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password:
                        </label>
                        <input
                            ref={passwordRef}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>

                    </div>
                    <div className="flex items-center justify-between">
                        <Link
                            href={"/signUp"}
                            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Create Account
                        </Link>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}
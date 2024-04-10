'use client'

import {useState} from "react"
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa"; 
import PocketBase from 'pocketbase';

export default function HomePage() {
    const pb = new PocketBase('http://ec2-54-154-251-251.eu-west-1.compute.amazonaws.com:8090');
    const [ rating, setRating ] = useState(0)
    const [ text, setText ] = useState("")
    const [ image, setImage ] = useState(null)
    const data = {
        "user": "123",
        "event": "12345",
        "rating": rating,
        "comment": text,
        };
 


    return (
        <body className="p-6 px-12">

        <div className="px-6 py-10 bg-gray-200 shadow-lg border rounded-lg" style={{ height: '1000px' }}>

        <h1 className="text-lg font-bold mb-4 text-center">Review Form</h1>

        <div className="px-6 py-6 bg-white shadow-lg border rounded-lg" style = {{ height: "300px" }}>
            <div className="grid grid-cols-2 gap-4">
            <img src={"blankimage.jpg"} alt="Description of the image" className="w-64 h-64" />
                <div className="w-2/3 ml-4">
                    <h2 className="text-lg font-bold mb-1">Name: </h2>
                    <p className="text-lg font-bold mb-1">Date: </p>
                    <p className="text-lg font-bold mb-1">Location: </p>
                </div>
            </div>

        </div>
        
        <div class="flex justify-left h-100" >

        <span onClick = {() => setRating(1)} class="text-yellow-500 text-3xl">
            {
                rating < 1 ? (
                    <FaRegStar />
                ) : (
                    <FaStar />
                )
            }
        </span>
        <span onClick = {() => setRating(2)} class="text-yellow-500 text-3xl">         {
                rating < 2 ? (
                    <FaRegStar />
                ) : (
                    <FaStar />
                )
            }</span>
        <span onClick = {() => setRating(3)} class="text-yellow-500 text-3xl">         {
                rating < 3 ? (
                    <FaRegStar />
                ) : (
                    <FaStar />
                )
            }</span>
        <span onClick = {() => setRating(4)} class="text-yellow-500 text-3xl">         {
                rating < 4 ? (
                    <FaRegStar />
                ) : (
                    <FaStar />
                )
            }</span>
        <span onClick = {() => setRating(5)} class="text-yellow-500 text-3xl">         {
                rating < 5 ? (
                    <FaRegStar />
                ) : (
                    <FaStar />
                )
            }</span>

        </div>



        <p className="mb-2">Any comments on the event:</p>
        <textarea className="bg-white w-full h-40 p-4 border border-gray-300 rounded-md" placeholder="Enter your text here..."></textarea>


        <label for="upload" class="cursor-pointer inline-block bg-blue-500 text-black rounded-m-md border border-black px-4 py-2 rounded-md shadow-md">
        Upload Pictures
        </label>
        <input id="upload" type="file" class="hidden" />

        
        <button onClick = {() => setText(placeholder)} className="p-3 py-2 px-4 bg-pink text-white font-bold rounded-xl text-center">Submit</button>

 

        </div>




        </body>
    )
}
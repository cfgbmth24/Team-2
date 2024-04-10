'use client'

import { usePocket } from "@/contexts/pocketContext"
import { useRef } from "react"
import { useRouter } from "next/navigation"

export default function CreateEvent() {

    const { pb } = usePocket()
    const nameRef = useRef()
    const timeRef = useRef()
    const locationRef = useRef()
    const descriptionRef = useRef()


    const router = useRouter()

   const handleSubmit = async (e) => {
        e.preventDefault()
        // To get the value: nameRef.current.value

        // Send the data to the server
        const data = {
            "name": nameRef.current.value,
            "startTime": new Date(timeRef.current.value),
            "location": locationRef.current.value,
            "description": descriptionRef.current.value
        };
        
        const record = await pb.collection('events').create(data);

        console.log(record)

        router.push("/")
    }


    return (
        <form onSubmit={handleSubmit} className="flex">

            <div className="flex-1">
                <div className="bg-pink p-6 rounded-xl mb-6 h-full">
                    <div className="mb-4">
                        <div className="bg-gray-200 rounded-xl p-6">
                            <label className="block mb-2">Name:</label>
                            <input ref={nameRef} type="text" className="border border-gray-300 p-2 rounded-md w-full" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="bg-gray-200 rounded-xl p-6">
                            <label className="block mb-2">Time:</label>
                            <input ref={timeRef} type="datetime-local" className="border border-gray-300 p-2 rounded-md w-full" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="bg-gray-200 rounded-xl p-6">
                            <label className="block mb-2">Address:</label>
                            <input ref={locationRef} type="text" className="border border-gray-300 p-2 rounded-md w-full" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="bg-gray-200 rounded-xl p-6">
                            <label className="block mb-2">Description:</label>
                            <textarea ref={descriptionRef} className="border border-gray-300 p-2 rounded-md w-full" />
                        </div>
                    </div>

                    <button type="submit" className="bg-purple rounded-xl p-6 w-21 text-white">Create Event</button>
                </div>
            </div>

            <div className="flex-1">
                <img src="./create_events.jpg" alt="Create Event" className="w-full h-full" />
            </div>

        </form>
    )
}
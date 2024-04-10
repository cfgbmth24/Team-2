'use client'

import { usePocket } from "@/contexts/pocketContext"
import { useRef } from "react"

export default function CreateEvent() {

    const { pb } = usePocket()

    async function submit() {
        // To get the value: nameRef.current.value

        // Send the data to the server
        const data = {
            "name": nameRef.current.value,
            "startTime": "2022-01-01 10:00:00.123Z",
            "location": "test"
        };
        
        const record = await pb.collection('events').create(data);

        console.log(record)
    }

    const nameRef = useRef()

    return (
        <form onSubmit={submit}>

            <div>
                <label>Event name</label>
                <input ref={nameRef} type="text"  />
            </div>


            <button type="submit">Create Event</button>
        </form>
    )
}
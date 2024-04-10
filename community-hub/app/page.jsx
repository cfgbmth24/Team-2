'use client'

import { usePocket } from "@/contexts/pocketContext.jsx"
import { useEffect, useState } from "react"

export default function HomePage() {

    const { pb } = usePocket()
    const [events, setEvents] = useState([])

    useEffect(() => {
        pb.collection('events').getFullList({
            sort: '-startTime',
        })
        .then(res => {
            console.log(res)
            setEvents(res)
        })
    }, [])

    
    return (
        <section className="flex gap-6">

            {/* Left col             */}
            <div className="flex-1 flex flex-col gap-6">

                <div className="p-6 bg-green-300">
                    <h1>Stats herez</h1>
                    <p>Community size</p>
                </div>

                <div className="p-6 bg-green-300">
                    Revirews
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {
                        events?.map((event, i) => {
                            return (
                                <div key={i} className="p-6 bg-gray-500 shadow-lg rounded-xl gap-6">
                                    <h1>{event?.name}</h1>
                                </div>
                            )
                        })
                    }
                </div>


            </div>


            {/* Right col */}
            <div className="w-72 flex flex-col gap-8">

                <div className="p-6 bg-green-300">
                    <h1>Leaderboard</h1>
                </div>

                <div className="p-6 bg-green-300">
                    Your tickets
                </div>

            </div>

        </section>
    )
}
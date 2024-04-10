'use client'

import { usePocket } from "@/contexts/pocketContext"
import { useEffect, useState } from "react"
import Link from "next/link"
import { RecentActivity } from "./RecentActivity"

export default function HomePage() {

    const { pb } = usePocket()
    const [events, setEvents] = useState([])
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        pb.collection('events').getFullList({
            sort: '-startTime',
        })
        .then(res => {
            console.log(res)
            setEvents(res)
        })
    }, [])


    useEffect(() => {
        pb.collection("users_count").getFullList()
        .then(docs => {
            setCount(docs[0]?.usersCount)
        })
    })

    return (
        <section className="flex gap-6 pt-20">

            {/* Left col             */}
            <div className="flex-1 flex flex-col gap-12">

                <div className="p-6 flex flex-col gap-2 pb-20">
                    <h1 className="text-6xl font-bold"><span className="text-pink">Community</span> <span className="text-blue">Hub</span></h1>
                    <h3 className="text-3xl text-gray-700"><b>{count}</b> Members </h3>
                </div>

                <div className="p-6 flex flex-col gap-6">
                    <RecentActivity />
                </div>

                <div className="flex flex-col gap-6 p-6">
                    <h2 className="text-4xl font-semibold">Upcoming events</h2>

                    <div className="grid grid-cols-3 gap-6" style={{gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"}}>  
                        {
                            events?.map((event, i) => {
                                return (
                                    <Link href={`/event/${event.id}`} key={i} className="shadow-lg rounded-xl flex flex-col gap-2 overflow-hidden">
                                        <img src={pb.files.getUrl(event, event.image)} className="h-28" alt="Event icon" />
                                        <div className="p-4 pt-0 flex flex-col gap-2">
                                            <h1 className="font-medium">{event?.name}</h1>
                                            <small className="font-xs text-gray-500">{event?.startTime.toLocaleString()}</small>
                                            <small className="font-xs text-gray-500">{event?.location}</small>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>

            </div>


            {/* Right col */}
            <div className="w-96 flex flex-col gap-8">

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
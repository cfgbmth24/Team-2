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
                                        <img src={pb.files.getUrl(event, event.image)} className="h-28 object-cover" alt="Event icon" />
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

                <div className="p-6">
                <div className="p-6 px-10 w-full">
                    <div className="bg-white shadow-lg border rounded-lg w-full">
                    <div className="text-2xl font-bold text-center py-6 w-full">
                        Leaderboard - Top Ticket Purchasers
                    </div>
                    <div className="divide-y divide-gray-300">
                        {/* Leaderboard Entry 1 */}
                        <div className="flex justify-between items-center px-6 py-4">
                        <div className="flex items-center space-x-4">
                            <div className="text-xl font-semibold text-gray-700">1</div>
                            <div>
                            <div className="text-lg font-semibold">Jamie Dimon</div>
                            <div className="text-sm text-gray-600">J.P. Morgan</div>
                            </div>
                        </div>
                        <div>
                            <div className="text-lg font-semibold">9 Tickets</div>
                        </div>
                        </div>
                        {/* Leaderboard Entry 2 */}
                        <div className="flex justify-between items-center px-6 py-4">
                        <div className="flex items-center space-x-4">
                            <div className="text-xl font-semibold text-gray-700">2</div>
                            <div>
                            <div className="text-lg font-semibold">Jane Smith</div>
                            <div className="text-sm text-gray-600">Bournemouth University</div>
                            </div>
                        </div>
                        <div>
                            <div className="text-lg font-semibold">7 Tickets</div>
                        </div>
                        </div>
                        {/* ... Additional entries ... */}
                        {/* Leaderboard Entry 3 */}
                        <div className="flex justify-between items-center px-6 py-4">
                        <div className="flex items-center space-x-4">
                            <div className="text-xl font-semibold text-gray-700">3</div>
                            <div>
                            <div className="text-lg font-semibold">Emma Johnson</div>
                            <div className="text-sm text-gray-600">Local School</div>
                            </div>
                        </div>
                        <div>
                            <div className="text-lg font-semibold">4 Tickets</div>
                        </div>
                        </div>
                        {/* ... Additional entries ... */}
                        {/* Leaderboard Entry 4 */}
                        <div className="flex justify-between items-center px-6 py-4">
                        <div className="flex items-center space-x-4">
                            <div className="text-xl font-semibold text-gray-700">4</div>
                            <div>
                            <div className="text-lg font-semibold">Mike Brown</div>
                            <div className="text-sm text-gray-600">Local Company</div>
                            </div>
                        </div>
                        <div>
                            <div className="text-lg font-semibold">3 Tickets</div>
                        </div>
                        </div>
                        {/* Leaderboard Entry 5 */}
                        <div className="flex justify-between items-center px-6 py-4">
                        <div className="flex items-center space-x-4">
                            <div className="text-xl font-semibold text-gray-700">5</div>
                            <div>
                            <div className="text-lg font-semibold">Olivia Taylor</div>
                            <div className="text-sm text-gray-600">School Teacher</div>
                            </div>
                        </div>
                        <div>
                            <div className="text-lg font-semibold">2 Tickets</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
{/* 
                <div className="p-6 bg-green-300">
                    Your tickets
                </div> */}

            </div>

        </section>
    )
}
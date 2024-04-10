'use client'

import { usePocket } from "@/contexts/pocketContext"
import { useEffect, useState } from "react"

export default function HomePage() {

    // Get the users count
    const [ count, setCount ] = useState(0)
    const { pb } = usePocket()

    useEffect(() => {
        pb.collection("users_count").getFullList()
        .then(docs => {
            setCount(docs[0]?.usersCount)
        })
    })

    return (
        <section className="flex gap-6">

            {/* Left col             */}
            <div className="flex-1 flex flex-col gap-6">

                <div className="p-6 flex flex-col gap-2">
                    <h1 className="text-5xl font-semibold">Community Hub</h1>
                    <h3 className="text-3xl"><b>{count}</b> Members </h3>
                    <p>And counting! ...</p>
                </div>

                <div className="p-6 bg-green-300">
                    Revirews
                </div>

                <div className="p-6 bg-green-300">
                    Events list
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
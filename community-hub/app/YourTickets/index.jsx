'use client'

import { usePocket } from "@/contexts/pocketContext"
import { useEffect, useState } from "react"

export function YourTickets() {

    const { pb } = usePocket()
    const [ tickets, setTickets ] = useState([])

    useEffect(() => {
        pb.collection('bought_tickets').getFullList({
            sort: '-created',
            expand: "ticket"
        })
        .then(res => {
            setTickets(res)
        })
    }, [])

    return tickets.length > 0 ? (
        <section className="flex flex-col gap-6">
            <h3>Your Tickets</h3>

            {
                tickets.map()
            }
            <div></div>
        </section>
    ) : (
        <></>
    )
}
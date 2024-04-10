'use client'

import { MdOutlineAccessTime } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { TicketBasket } from "./TicketBasket";
import { useEffect, useState } from "react";
import { usePocket } from "@/contexts/pocketContext";

export default function EventPage({ params }) {

    const [ event, setEvent ] = useState({})
    const { pb } = usePocket()

    useEffect(() => {
        pb.collection("events").getOne(params.eventID)
        .then(res => {
            setEvent(res)
        })
        .catch(err => {
            console.error(err)
        })
    }, [])

    return (
        <section className="max-w-7xl m-auto flex flex-col gap-8">

            <div className="flex gap-6">

                <img src={event?.image} className="bg-green-300 h-36 w-72 rounded-xl" />

                <div className="flex flex-col gap-2 justify-center">
                    <h1 className="text-4xl font-semibold">Event Name</h1>
                    <div className="flex gap-2 items-center">
                        <MdOutlineAccessTime />
                        <p>{event?.startTime?.toLocaleString()}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <CiLocationOn />
                        <p>{event?.location}</p>
                    </div>
                </div>

            </div>

            <div className="flex gap-6">

                <div className="flex-1 flex flex-col gap-3">

                    <h2 className="text-2xl font-semibold">Description</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium quod voluptatibus, molestiae vero odit facilis mollitia! Quae nulla iusto distinctio illum libero dicta eius adipisci! Molestias possimus sit eaque.</p>

                </div>

                <div className="w-80">

                    <TicketBasket eventID={params.eventID} />

                </div>

            </div>

        </section>
    )
}
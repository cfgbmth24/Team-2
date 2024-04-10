'use client'

import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { TicketBasket } from "./TicketBasket";
import { useEffect, useState } from "react";
import { LuSparkles } from "react-icons/lu";
import { usePocket } from "@/contexts/pocketContext";
import Link from "next/link"

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

                <img src={pb.files.getUrl(event, event.image)} className="bg-green-300 h-36 w-72 rounded-xl object-cover" />

                <div className="flex flex-col gap-2 justify-center">
                    <h1 className="text-4xl font-semibold">{event?.name}</h1>
                    <div className="flex gap-2 items-center">
                        <IoMdTime />
                        <p>{event?.startTime?.toLocaleString()}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <CiLocationOn />
                        <p>{event?.location}</p>
                    </div>
                </div>

            </div>

            <div className="flex gap-6">

                {
                    new Date(event?.startTime).getTime() > new Date().getTime() ? (
                        <Link className="p-4 rounded-xl bg-blue text-white font-semibold text-xl w-full flex flex-col items-center text-center" href={"/review/" + params.eventID}>
                            <span className="font-thin">This event has already started</span>
                            <div className="flex items-center gap-2">
                                <LuSparkles />
                                <span className="text-xl">Review Event</span>
                            </div>
                        </Link>
                    ) : (
                        <div className="flex-1 flex flex-col gap-3">
                            <h2 className="text-2xl font-semibold">Description</h2>    
                            <p>{event?.description}</p>
                        </div>
                    )
                }

                <div className="w-80">

                    {
                        new Date(event?.startTime).getTime() < new Date().getTime() ? (
                            <TicketBasket eventID={params.eventID} />
                        ) : (
                            <></>
                        )
                    }


                </div>

            </div>

        </section>
    )
}
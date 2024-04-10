'use client'

import { useEffect, useState } from "react"
import { StarsRating } from "./StarsRating"
import { usePocket } from "@/contexts/pocketContext"

export function RecentActivity() {

    const [ activity, setActivity ] = useState([])

    const { pb } = usePocket()

    useEffect(() => {
        pb.collection('reviews').getList(1, 10, {
            sort: "-created",
            expand: "event,user"
        })
        .then(res => {
            setActivity(res.items)
        })
        .catch(err => {
            console.error("Error getting reviews", err)
        })
    })

    return (
        <section className="flex gap-6">

            {
                activity?.map(item => {
                    return (
                        <div className="w-64 rounded-xl p-6 border-gray-300 border-2 text-xl flex flex-col gap-4">

                            <StarsRating rating={item.rating} />

                            <p className="font-thin text-gray-600">{item?.comment}</p>
                            
                            <div className="flex gap-3">
                                <img className="h-8 w-12 object-cover rounded" src={pb.files.getUrl(item.expand.event, item.expand.event.image, {'thumb': '0x100'})} />
                                <b>{item?.expand?.event?.name}</b>
                            </div>
                            
                        </div>
                    )
                })
            }



        </section>
    )
}
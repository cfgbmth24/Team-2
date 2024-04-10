'use client'

import { usePocket } from "@/contexts/pocketContext"
import Link from "next/link"
import { useEffect, useState } from "react"

export function TicketBasket({ eventID }) {

    const { pb } = usePocket()
    const [ options, setOptions ] = useState([])
    const [ basket, setBasket ] = useState([])

    useEffect(() => {
        pb.collection("ticket_types")
        .getFullList({
            filter: `event = "${eventID}"`
        })
        .then(docs => {
            console.log(docs)
            setOptions(docs)
        })
        .catch(err => {
            console.error("Error getting ticket types", err)
        })
    }, [])


    return (
        <div className="flex flex-col gap-8 shadow p-6 rounded-xl">

            <h2 className="font-semibold text-xl grid-row">Tickets</h2>

            <div className="flex flex-col gap-6">

                {
                    options.length === 0 ? (
                        <p className="text-gray-400 text-xs text-center">No tickets</p>
                    ) : (
                        <></>
                    )
                }

                {
                    options.map(opt => {
                        return (
                            <div className="p-4 border-[1px] border-gray-300 rounded-xl bg-gray-100 flex justify-between items-center">
                                <div>
                                    <h4>{opt?.name}</h4>
                                    <b>£{opt?.price?.toFixed(2)}</b>
                                </div>
                                <button>
                                    Add
                                </button>
                            </div>
                        )
                    })
                }

            </div>

            {
                basket.map(b => {
                    return (
                        <div>
                            
                        </div>
                    )
                })
            }
            
            <div className="flex justify-end">
                <Link className="bg-pink p-4 text-white rounded-xl font-semibold" href={"/event/" + eventID + "/checkout"}>Checkout</Link>
            </div>

        </div>
    )
}
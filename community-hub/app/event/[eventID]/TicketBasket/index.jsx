'use client'

import { usePocket } from "@/contexts/pocketContext"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa"

export function TicketBasket({ eventID }) {

    const { pb, user } = usePocket()
    const [ options, setOptions ] = useState([])
    const [ basket, setBasket ] = useState([])
    const [ counter, setCounter ] = useState(0)

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

    const addToBasket = (id, name, price) => {
        setBasket(basket => {
            return [
                ...basket,
                { id, name, price }
            ]
        })
    }

    const checkout = async () => {

        basket.forEach((item, i) => {
            pb.collection('bought_tickets').create({
                user: user.id,
                ticketType: item.id
            })
            .then(() => {
                console.log("Created", i)
                if(i === basket.length - 1) {
                    // Then all tickets have been created
                    router.push("/")
                }
            })
            .catch(err => {
                console.error("Error creating ticket", i, err)
            })
        })

        router.push("/")

    }

    const router = useRouter()

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
                                <button onClick={() => addToBasket(opt.id, opt.name, opt.price)}>
                                    <FaPlus />
                                </button>
                            </div>
                        )
                    })
                }

            </div>


            {
                basket.length > 0 ? (
                    <div className="flex flex-col gap-2">
                        <h4 className="font-medium text-lg">Your Basket</h4>
                        {
                            basket.map((b, i) => {
                                return (
                                    <div className="flex justify-between items-center">
                                        <p>{b.name}</p>
                                        <b>£{b.price?.toFixed(2)}</b>
                                        <small
                                            className="cursor-pointer"
                                            onClick={() => {
                                                setBasket(
                                                    basket => {
                                                        setCounter(c => c++)
                                                        basket.splice(i, 1)
                                                        return basket
                                                    }
                                                )
                                            }}
                                        >
                                            <IoMdClose />
                                        </small>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    <></>
                )
            }
            
            <div className="flex justify-end">
                <button
                    disabled={basket.length === 0}
                    onClick={checkout}
                    className="bg-pink disabled:bg-gray-400 p-4 text-white rounded-xl font-semibold"
                    href={"/event/" + eventID + "/checkout"}>
                        Checkout
                </button>
            </div>

        </div>
    )
}
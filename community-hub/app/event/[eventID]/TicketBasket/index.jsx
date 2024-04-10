import Link from "next/link"
import { useState } from "react"

export function TicketBasket({ options }) {

    const [ basket, setBasket ] = useState([])

    return (
        <div className="flex flex-col gap-6">

            <h2 className="font-semibold text-xl">Tickets</h2>

            <div className="flex flex-col gap-6">

                {
                    options.map(opt => {
                        return (
                            <div className="p-4 border-2 border-gray-300 rounded-xl bg-gray-100 flex justify-between items-center">
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
            
            <div>
                <Link className="bg-pink p-4 text-white" href="">Checkout</Link>
            </div>

        </div>
    )
}
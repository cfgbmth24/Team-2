import { MdOutlineAccessTime } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { TicketBasket } from "./TicketBasket";

export default function EventPage() {
    return (
        <section>

            <div className="flex">

                <div className="flex flex-col gap-3">
                    <h1>Event Name</h1>
                    <div className="flex gap-2 items-center">
                        <MdOutlineAccessTime />
                        <p>Event Time</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <CiLocationOn />
                        <p>Location</p>
                    </div>
                </div>

                <img src="" className="bg-green-300 h-36" />

            </div>

            <div className="flex gap-6">

                <div className="flex-1">

                    <h2>Description</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium quod voluptatibus, molestiae vero odit facilis mollitia! Quae nulla iusto distinctio illum libero dicta eius adipisci! Molestias possimus sit eaque.</p>

                </div>

                <div className="w-64">

                    <TicketBasket />

                </div>

            </div>

        </section>
    )
}
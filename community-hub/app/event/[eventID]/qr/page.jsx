import QRCode from "react-qr-code";
import Link from "next/link"
import { LuArrowLeft } from "react-icons/lu";

export default function QRPage({ params }) {
    return (
        <section className="flex flex-col gap-12 text-center items-center">
            <Link href={"/event/" + params.eventID} className="flex gap-2 items-center"><LuArrowLeft /> Go Back</Link>
            <QRCode value={"/review/" + params.eventID} />
            <p className="text-xl">Scan and share your thoughts!</p>
        </section>
    )
}
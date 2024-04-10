'use client'

import { usePocket } from "@/contexts/pocketContext"
import { useRouter } from "next/navigation"

export function UserButton() {

    const { user, logout } = usePocket()
    const router = useRouter()

    return user ? (
        <button onClick={logout} className="bg-blue p-2 px-4 font-semibold rounded-xl text-white">Log Out</button>
    ) : (
        <button onClick={() => router.push("/login")} className="bg-pink p-2 px-4 font-semibold rounded-xl text-white">Log in / Sign up</button>
    )
}
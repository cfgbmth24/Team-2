'use client'

import { PocketProvider } from "@/contexts/pocketContext";
import "./globals.css";
import Link from "next/link"
import { UserButton } from "./UserButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
		<PocketProvider>
			<body className="p-4 px-28">

				<nav className="flex justify-between pb-8">

					<Link href={"/"}>
						<img src="/logo.jpg" className="h-16" />
					</Link>

					<UserButton />

				</nav>

				<main className="min-h-screen">
					{children}
				</main>

				<footer className="border-t-2 border-gray-200 p-6 pt-8 flex justify-center items-center text-center">
					<p className="text-gray-500">Terms & Conditions</p>
				</footer>
			</body>
		</PocketProvider>
    </html>
  );
}

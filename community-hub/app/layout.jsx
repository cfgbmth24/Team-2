'use client'

import { PocketProvider } from "@/contexts/pocketContext";
import "./globals.css";
import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
		<PocketProvider>
			<body className="p-4 px-12">

				<nav className="flex justify-between pb-8">

					<Link href={"/"}>
						<img src="/logo.jpg" className="h-16" />
					</Link>

					<button className="p-4 bg-pink text-white font-bold rounded-xl">Log in</button>

				</nav>

				{children}
			</body>
		</PocketProvider>
    </html>
  );
}

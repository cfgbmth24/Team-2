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

				{children}
			</body>
		</PocketProvider>
    </html>
  );
}

import { PocketProvider } from "@/contexts/pocketContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PocketProvider>
        <body className={inter.className}>
          {children}
        </body>
      </PocketProvider>
    </html>
  );
}

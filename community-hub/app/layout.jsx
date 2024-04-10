import { PocketProvider } from "@/contexts/pocketContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PocketProvider>
        <body>
          {children}
        </body>
      </PocketProvider>
    </html>
  );
}

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import "../../public/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Website Portfolio",
  description: "A simple programmer willing to offer you the best of my abilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} snap-y overflow-x-hidden`}>
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}

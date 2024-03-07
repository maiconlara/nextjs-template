import "./globals.css";
import type {Metadata} from "next";
import {Poppins, Plus_Jakarta_Sans} from "next/font/google";
import {SpeedInsights} from "@vercel/speed-insights/next";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});
const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-jakarta",
});

export const metadata: Metadata = {
    title: "NextJS Template",
    description: "Enjooooy!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} ${jakarta.variable} bg-background relative flex min-h-screen w-full max-w-full flex-col items-center justify-center overflow-x-hidden font-sans`}
            >
                <SpeedInsights />
                {children}
            </body>
        </html>
    );
}

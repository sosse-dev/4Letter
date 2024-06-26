import type { Metadata } from "next";
import { Inter, Just_Another_Hand, Raleway } from "next/font/google";
import "./globals.css";
import NavbarM from "@/components/animation/NavbarM";

const inter = Inter({ subsets: ["latin"] });

const raleway = Raleway({ subsets: ["latin"], weight: "400" });
const just_another_hand = Just_Another_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-just-another-hand",
});

export const metadata: Metadata = {
  title: "4Letter",
  description: "Beuatifull and Aesthetic Webstie by Ahmad Sosse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="container::-webkit-scrollbar container mx-auto" lang="en">
      <body
        className={`${raleway.className} ${just_another_hand.variable} bg-primary`}
      >
        <NavbarM />
        {children}
      </body>
    </html>
  );
}

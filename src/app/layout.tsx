import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Provider from "@/components/ui/Provider";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Little Learners",
  description: "Education for the future",
  icons: "./fav-logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

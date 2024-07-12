import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import {  LucideGithub } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const url = process.env.DEPLOYMENT_URL;



export const metadata: Metadata = {
  title: "PromptHub",
  description: "Get all the prompts which are used by people in vercel v0",
  openGraph: {
      type: "website",
       url: url,
       title: "PromptHub",
       description: "Get all the prompts which are used by people in vercel v0",
       siteName: "Get all the prompts which are used by people in vercel v0",
       images: [{
         url: `${url}/meta/meta_shot.webp`,
         secureUrl: `${url}/meta/meta_shot.webp`,
         width: 1200,
         height: 627,
         alt: 'Get all the prompts which are used by people in vercel v0'
       }],
     }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      <div className="w-full mb-4 flex flex-col items-center">
          <p>By <Link target="__blank" href={'https://twitter.com/lakshyaroonwal'} className="text-blue-500 hover:text-blue-700">@Lakshya_roonwal</Link></p>
          <Link target="__blank" href={'https://github.com/lakshya-roonwal'}>
          <LucideGithub />
          </Link>
        </div>
        <Analytics />
        </body>
    </html>
  );
}

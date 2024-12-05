import type { Metadata } from "next";
import "./globals.css";
import { DataContextProvider } from './lib/dataContext';


export const metadata: Metadata = {
  title: "Navigation list",
  description: "Droplo recruitment tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-100">
        <DataContextProvider>
          {children}
        </DataContextProvider>
      </body>
    </html>
  )
}

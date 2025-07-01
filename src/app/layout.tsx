import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hivetensor - The Liberation of Artificial Intelligence",
  description: "Individually we are drops, together we are the ocean. Abundance is our weapon against scarcity - join the swarm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

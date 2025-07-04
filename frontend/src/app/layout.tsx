import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "Hivetensor - The Liberation of Artificial Intelligence",
  description: "Individually we are drops, together we are the ocean. Abundance is our weapon against scarcity - join the swarm.",
  icons: {
    icon: '/hivetensor-logo.svg',
    shortcut: '/hivetensor-logo.svg',
    apple: '/hivetensor-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

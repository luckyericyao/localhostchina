import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Localhost Global | Travel Back Home",
  description:
    "A quiet, premium local-host travel network for thoughtful travelers, starting with China.",
  metadataBase: new URL("https://localhost.global")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

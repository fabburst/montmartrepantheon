import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Montmartre & Panthéon - Audioguide",
  description: "Votre carnet de voyage interactif pour découvrir Montmartre et le Panthéon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}

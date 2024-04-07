import LandingPageHeader from "@/components/landing-page/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sankyfy",
  description: "",
};

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex items-center justify-center">{children}</main>
      </body>
    </html>
  );
}

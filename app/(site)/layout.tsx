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
        <LandingPageHeader />
        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}

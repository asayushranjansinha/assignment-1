import LandingPageHeader from "@/components/landing-page/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify",
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
        {children}
      </body>
    </html>
  );
}

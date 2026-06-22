import type { Metadata } from "next";
import PageContent from "./components/PageContent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Integrated Facilities Management & MEP Services in Dubai, UAE",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Integrated Facilities Management Dubai`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <PageContent />
    </main>
  );
}

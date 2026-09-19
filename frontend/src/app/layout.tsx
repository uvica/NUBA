import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "NUBA Atelier | Curated Artistry in Leather",
	description: "Handcrafted leather goods, shaped slowly in the atelier.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <html lang="en"><body>{children}</body></html>;
}

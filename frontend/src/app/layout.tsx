import type { Metadata } from "next";
import "./globals.css";

// Metadata for the site
export const metadata: Metadata = {
	title: "NUBA | Curated Artistry in Leather",
	description: "Handcrafted leather goods, shaped slowly in the atelier.",
};

// Root layout component
export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

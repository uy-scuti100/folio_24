import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/global/custom-cursor";
import Noise from "@/components/global/noise";
import Preloader from "../components/global/preloader";
import Lenis from "@/components/global/lenis";
import FloatingNav from "@/components/global/floating-nav";

export const metadata: Metadata = {
	title: "Hussain Yusuf | Web Developer",
	description:
		"Focused on creating high-performing websites that drive business success, combining clean design, and accessible user interfaces for an exceptional user experience.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				<Lenis>
					<Noise />
					<Preloader />
					<CustomCursor />
					<FloatingNav />
					{children}
				</Lenis>
			</body>
		</html>
	);
}

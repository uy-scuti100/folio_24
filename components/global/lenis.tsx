"use client";
import ReactLenis from "@studio-freight/react-lenis";

export default function Lenis({ children }: { children: React.ReactNode }) {
	return (
		<ReactLenis
			root
			options={{
				duration: 1.2,
				easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			}}
		>
			{children}
		</ReactLenis>
	);
}

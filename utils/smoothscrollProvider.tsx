"use client";

import Lenis from "lenis";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
interface SmoothScrollContextType {
	lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null);

export const SmoothScrollProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [lenis, setLenis] = useState<Lenis | null>(null);
	const pathname = usePathname();
	const lenisRef = useRef<Lenis | null>(null);

	useEffect(() => {
		if (lenisRef.current && lenisRef.current instanceof Lenis) {
			lenisRef.current.scrollTo(0, { immediate: true });
		}
	}, [pathname]);

	useEffect(() => {
		const newLenis = new Lenis({
			duration: 1,
		});
		setLenis(newLenis);
		lenisRef.current = newLenis;
		function raf(time: number) {
			newLenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		return () => {
			newLenis.destroy();
		};
	}, []);

	return (
		<SmoothScrollContext.Provider value={{ lenis }}>
			{children}
		</SmoothScrollContext.Provider>
	);
};

export const useSmoothScroll = () => {
	const context = useContext(SmoothScrollContext);
	if (!context) {
		throw new Error(
			"useSmoothScroll must be used within a SmoothScrollProvider"
		);
	}
	return context;
};

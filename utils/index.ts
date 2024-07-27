"use client";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

export const useMediaQuery = () => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const handleChange = () => {
			const screensize = window.innerWidth;
			if (screensize <= 639) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		handleChange();

		window.addEventListener("resize", handleChange);
		return () => window.removeEventListener("resize", handleChange);
	}, []);
	return { isMobile };
};

export const useGsap = () => {
	return { useGSAP, gsap, ScrollTrigger };
};

"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Preloader() {
	const preloaderRef = useRef<HTMLDivElement | null>(null);
	const logoRef = useRef<HTMLDivElement | null>(null);
	const timeRef = useRef<HTMLDivElement | null>(null);
	const greetingRef = useRef<HTMLHeadingElement | null>(null);

	useGSAP(() => {
		gsap.to(preloaderRef.current, {
			duration: 3,
			delay: 1.5,
			y: "-100%",
			ease: "expo.inOut",
			onUpdate: () => {
				const preloader = preloaderRef.current;
				const translateY = gsap.getProperty(preloader, "y");

				if (typeof translateY === "number" && translateY <= -50) {
					if (preloader) {
						// preloader.style.backgroundColor = "#ad9062";
						preloader.style.backgroundColor = "var(--deep-green)";
					}
				} else if (typeof translateY === "number" && translateY <= -70) {
					if (preloader) {
						preloader.style.backgroundColor = "var(--deep-green)";
						// preloader.style.backgroundColor = "var(--deep-green)";
						preloader.style.clipPath = "polygon(circle, 0 0 50% 100%)";
					}
				}
			},
			onComplete: () => {
				const preloader = preloaderRef.current;
				if (preloader) {
					preloader.style.display = "none";
				}
			},
		});

		gsap.to(logoRef.current, {
			duration: 1,
			opacity: 1,
			y: 0,
			scale: 1,
			ease: "power2.in",
		});
		gsap.to(timeRef.current, {
			duration: 1,
			opacity: 1,
			y: 0,
			scale: 1,
			ease: "power2.in",
		});

		gsap.to(greetingRef.current, {
			duration: 1,
			delay: 0,
			y: 0,
			scale: 1,
			ease: "bounce.in",
		});
	}, []);

	return (
		<div
			id="preloader"
			ref={preloaderRef}
			className="bg-black fixed inset-0 w-full h-full  text-lighter-brown overflow-hidden transition-colors duration-500 ease-in-out"
		>
			<div className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
				{" "}
				<div className="relative w-full flex justify-center items-center overflow-hidden whitespace-nowrap">
					<h1
						className="arflex text-[6vw] lowercase will-change-contents whitespace-nowrap translate-y-[200px] scale-95"
						ref={greetingRef}
					>
						hey! Glad you’re here
					</h1>
				</div>
			</div>

			<div
				className="absolute bottom-0 left-0 p-6 opacity-0 translate-y-[30px] scale-90"
				// opacity-0 -translate-y-[30px] scale-90
				ref={logoRef}
			>
				<h1 className="relative w-fit ">
					<img
						src="/logo-light.svg"
						alt="logo"
						className="w-full h-full object-contain fill-white "
					/>
				</h1>
			</div>
			<div
				className="absolute bottom-0 right-0 p-6 opacity-0 translate-y-[30px] scale-90"
				// opacity-0 -translate-y-[30px] scale-90
				ref={timeRef}
			>
				<h1 className="relative w-fit ">
					<img
						src="/logo-light.svg"
						alt="logo"
						className="w-full h-full object-contain fill-white "
					/>
				</h1>
			</div>
		</div>
	);
}

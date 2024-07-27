"use client";

import { useGsap } from "@/utils";
import { useRef } from "react";

export default function Preloader() {
	const preloaderRef = useRef<HTMLDivElement | null>(null);

	const { useGSAP, gsap } = useGsap();

	useGSAP(() => {
		gsap.to(preloaderRef.current, {
			duration: 1,
			delay: 2,
			display: "none",
			opacity: 0,
			ease: "power4.inOut",
		});
		gsap.to(document.body, {
			duration: 3,
			overflow: "hidden",
			onComplete: () => {
				document.body.style.overflow = "auto";
			},
		});

		gsap.to(".dot-one", {
			duration: 0.5,
			translateX: "30px",
			ease: "elastic.inOut",
			borderRadius: "0px",
		});
		gsap.to(".dot-one", {
			duration: 0.5,
			delay: 0.8,
			translateX: "0px",
			borderRadius: "9999px",
			ease: "back.out",
		});
		gsap.to(".dot-two", {
			duration: 0.5,
			translateX: "-30px",
			ease: "elastic.inOut",
			borderRadius: "0px",
		});
		gsap.to(".dot-two", {
			duration: 0.5,
			delay: 0.8,
			translateX: "0px",
			ease: "back.out",
			borderRadius: "9999px",
		});
		gsap.to(".dot-three", {
			duration: 1,
			delay: 1.8,
			scale: 120,
			ease: "power4.inOut",
		});
	}, []);
	return (
		<div
			id="preloader"
			ref={preloaderRef}
			className="bg-black fixed top-0 left-0 right-0 bottom-0 overflow-hidden w-full h-full transition-colors duration-500 ease-in-out  "
		>
			<div className="h-full w-full flex justify-center items-center relative">
				<div className="dot-one absolute rounded-full w-4 h-4 bg-bg "></div>
				<div className="dot-two absolute rounded-full w-4 h-4 bg-bg"></div>
				<div className="dot-three absolute rounded-full w-4 h-4 bg-bg"></div>
			</div>
		</div>
	);
}

// h
{
	/* <div
ref={boxRef}
className=" absolute -translate-x-1/2 -translate-y-[80%] top-1/2 left-1/2  bg-white w-[400px] sm:w-[600px] md:w-[800px] h-[70px] sm:h-[90px] opacity-0"
></div>

<div className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
{" "}
<div className="w-full flex justify-center items-center overflow-hidden whitespace-nowrap">
    <h1
        className="arflex text-[6vw] lowercase will-change-contents whitespace-nowrap translate-y-[50px] "
        ref={greetingRef}
    >
        hey there
    </h1>
</div>
</div> */
}

// useGSAP(() => {
// 	tl.current = gsap.timeline();
// 	tl2.current = gsap.timeline();
// 	gsap.to(document.body, {
// 		duration: 4,
// 		overflow: "hidden",
// 		onComplete: () => {
// 			document.body.style.overflow = "auto";
// 		},
// 	});
// 	gsap.to(preloaderRef.current, {
// 		duration: 2,
// 		delay: 4,
// 		display: "none",
// 		opacity: 0,
// 		ease: "power4.inOut",
// 	});
// 	tl.current
// 		.to(greetingRef.current, {
// 			duration: 1.5,
// 			y: 0,
// 			scale: 1,
// 			ease: "power3.in",
// 		})
// 		.to(greetingRef.current, {
// 			duration: 0.5,
// 			delay: 1,
// 			y: "-50px",
// 			opacity: 0,
// 			display: "none",
// 			ease: "back.in",
// 		});
// 	tl2.current
// 		.to(boxRef.current, {
// 			duration: 2,
// 			opacity: 1,
// 			y: "-60%",
// 			ease: "power2.in",
// 		})
// 		.to(boxRef.current, {
// 			delay: 1,
// 			duration: 1,
// 			width: "100px",
// 			height: "100px",
// 			borderRadius: "1000px",
// 		})
// 		.to(boxRef.current, {
// 			duration: 2,
// 			scale: 30,
// 			display: "none",
// 		});
// }, []);

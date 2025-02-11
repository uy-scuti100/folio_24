"use client";

import { useGsap } from "@/utils";
import { useRef } from "react";
import Name from "./name";
import AnimatedWords from "@/components/global/animatedWords";
import { connect } from "http2";
import Link from "next/link";

export default function HeroSection() {
	const { useGSAP, gsap, ScrollTrigger } = useGsap();
	const sectionRef = useRef<HTMLDivElement | null>(null);
	gsap.registerPlugin(ScrollTrigger);
	const connectRef = useRef<HTMLDivElement | null>(null);

	useGSAP(() => {
		gsap.to(sectionRef.current, {
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top top",
				end: "+=" + (window.innerHeight + 5 * 0.5),
				scrub: 1,
				pin: true,
			},
			y: 250,
			scale: 0.75,
			opacity: 0.3,
			ease: "power3.out",
		});
		gsap.fromTo(
			connectRef.current,
			{ y: "50%", opacity: 0 },
			{
				y: "0%",
				opacity: 1,
				duration: 1,
				ease: "bounce.out",
				stagger: 0.05,
				delay: 3,
			}
		);
	}, []);
	return (
		<div>
			<div
				style={{ height: "100dvh" }}
				ref={sectionRef}
				className="top-0 left-0 right-0 w-full "
			>
				<div className="absolute left-0 w-full p-4 bottom-5">
					<h1 className="sr-only"> Hussain Yusuf</h1>
					<Name />
					<div className="mt-20 max-w-[350px] md:max-w-[500px]">
						<AnimatedWords sentence="Focused on creating high-performing websites that drive business success, combining clean design, and accessible user interfaces for an exceptional user experience." />
					</div>
					<div ref={connectRef} className="mt-5">
						<Link
							href={"https://cal.com/hussain-yusuf-cr1t4i/15min"}
							className="px-8 py-3 text-white uppercase transition-all duration-500 bg-black rounded-full hover:scale-110 hover:underline"
						>
							Let&rsquo;s work together
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

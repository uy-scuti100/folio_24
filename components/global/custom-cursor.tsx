"use client";
import { useGsap } from "@/utils";
import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
	const { gsap } = useGsap();
	const isActive = false;
	const mouse = useRef({ x: 0, y: 0 });
	const delayedMouse = useRef({ x: 0, y: 0 });
	const rafId = useRef<any>(null);
	const circle = useRef<HTMLDivElement | null>(null);
	const size = isActive ? 400 : 30;

	const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

	const manageMouseMove = (e: { clientX: any; clientY: any }) => {
		const { clientX, clientY } = e;

		mouse.current = {
			x: clientX,
			y: clientY,
		};
	};

	const animate = () => {
		const { x, y } = delayedMouse.current;

		delayedMouse.current = {
			x: lerp(x, mouse.current.x, 0.4),
			y: lerp(y, mouse.current.y, 0.4),
		};

		moveCircle(delayedMouse.current.x, delayedMouse.current.y);

		rafId.current = window.requestAnimationFrame(animate);
	};

	const moveCircle = (x: number, y: number) => {
		gsap.set(circle.current, { x, y, xPercent: -20, yPercent: -15 });
	};

	useEffect(() => {
		animate();
		window.addEventListener("mousemove", manageMouseMove);
		return () => {
			window.removeEventListener("mousemove", manageMouseMove);
			window.cancelAnimationFrame(rafId.current);
		};
	}, [isActive]);

	return (
		<div
			className="cursor hidden md:block"
			ref={circle}
			style={{
				width: size,
				height: size,
			}}
		>
			<img
				src="/mouse.svg"
				alt="cursor"
				style={{ width: "100%", height: "100%" }}
			/>
		</div>
	);
}

"use client";
import { useEffect, useState } from "react";
import Bar from "./svgs/bar";
import X from "./svgs/x";

export default function FloatingNav() {
	const [show, setShow] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition =
				window.scrollY || document.documentElement.scrollTop;
			const viewportHeight = window.innerHeight;
			const threshold = viewportHeight / 2;

			if (currentPosition > threshold) {
				setShow(true);
			} else {
				setShow(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = "visible";
			};
		}
	}, [open]);

	return (
		<nav>
			<button
				onClick={() => setOpen((prev) => !prev)}
				className={`${
					show ? "opacity-1 scale-100 visible" : "invisible opacity-0 scale-0"
				} fixed bottom-5 right-5 z-[888] transition-all duration-500 ease-in-out `}
			>
				<div className="bg-light-brown  rounded-full h-8 w-8 flex justify-center items-center p-7 duration-500 transition-all ease-linear">
					<div>{open ? <X /> : <Bar />}</div>
				</div>
			</button>
			{open && <div className="inset-0 bg-deep-green fixed z-50"></div>}
		</nav>
	);
}

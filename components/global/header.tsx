"use client";
import { useGsap } from "@/utils";
import Link from "next/link";
import { useRef } from "react";
import Logo from "./logo";

export default function Header() {
	const { useGSAP, gsap } = useGsap();
	const logoRef = useRef<HTMLDivElement | null>(null);
	const linkMenu = useRef<HTMLMenuElement | null>(null);

	useGSAP(() => {
		const linkList = linkMenu.current
			? Array.from(linkMenu.current.querySelectorAll(".link")).reverse()
			: [];
		const timeline1 = gsap.timeline();
		timeline1.to(linkList, {
			delay: 2,
			duration: 1,
			y: 0,
			opacity: 1,
			stagger: {
				amount: 0.6,
			},
			ease: "back.in",
		});
		gsap.to(logoRef.current, {
			delay: 2,
			duration: 1,
			y: 0,
			opacity: 1,

			ease: "back.in",
		});
	}, []);

	return (
		<header className="absolute z-20 w-full transition-all duration-500 ease-in-out">
			<nav className="px-3 py-3 mt-3 mb-6 ">
				<div className="flex items-start justify-between sm:items-center">
					<div
						ref={logoRef}
						className="relative w-[80px] sm:w-[100px] h-[32px] opacity-0 translate-y-[10px]"
					>
						<Logo />
					</div>

					{/* <div>
						<menu
							ref={linkMenu}
							className="flex flex-col items-start sm:items-center sm:flex-row sm:gap-2 menuList"
						>
							{links.map((link, i) => (
								<div key={i}>
									<Link
										href={link.href}
										className="uppercase  hover:underline text-ash text-sm font-bold link opacity-0 translate-y-[-40px]"
									>
										{link.label}
									</Link>
								</div>
							))}
						</menu>
					</div> */}
				</div>
			</nav>
		</header>
	);
}

const links = [
	{
		label: "services",
		href: "#servies",
	},
	{
		label: "work",
		href: "#work",
	},
	{
		label: "about",
		href: "#about",
	},
	{
		label: "contact",
		href: "#contact",
	},
];

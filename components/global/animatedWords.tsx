// "use cleint";

// import { useGsap } from "@/utils";
// import { useRef } from "react";

// interface AnimatedWordsProps {
// 	sentence: string;
// }

// const AnimatedWords: React.FC<AnimatedWordsProps> = ({ sentence }) => {
// 	const { gsap, useGSAP } = useGsap();
// 	const containerRef = useRef<HTMLDivElement>(null);

// 	// useGSAP(() => {
// 	// 	const words = containerRef.current?.querySelectorAll(".word");
// 	// 	if (words) {
// 	// 		gsap.to(words, {
// 	// 			delay: 2.2,
// 	// 			opacity: 1,
// 	// 			y: 0,
// 	// 			duration: -0.1,
// 	// 			stagger: 0.4,
// 	// 		});
// 	// 	}
// 	// }, []);

// 	return (
// 		<div
// 			ref={containerRef}
// 			style={{ overflow: "hidden", display: "inline-block" }}
// 		>
// 			{sentence.split(" ").map((word, index) => (
// 				<span
// 					key={index}
// 					className=" text-ash text-lg md:text-2xl"
// 					style={{
// 						display: "inline-block",
// 						opacity: 1,
// 						transform: "translateY(20px)",
// 						marginRight: "5px",
// 					}}
// 				>
// 					{word}
// 				</span>
// 			))}
// 		</div>
// 	);
// };

// export default AnimatedWords;

import { useGsap } from "@/utils";
import { useRef } from "react";
interface AnimatedWordsProps {
	sentence: string;
}

export default function AnimatedWords({ sentence }: AnimatedWordsProps) {
	const { gsap, useGSAP } = useGsap();
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const words = containerRef.current?.querySelectorAll(".word");
		if (words) {
			gsap.fromTo(
				words,
				{ y: "50%", opacity: 0 },
				{
					y: "0%",
					opacity: 1,
					duration: 1,
					ease: "power2.out",
					stagger: 0.05,
					delay: 2.5,
				}
			);
		}
	}, [sentence]);

	return (
		<div ref={containerRef} className="flex flex-wrap overflow-hidden">
			{sentence.split(" ").map((word, index) => (
				<span
					key={index}
					className="relative overflow-hidden inline-block mr-[5px]"
				>
					<span className="word inline-block translate-y-full opacity-0 text-ash text-lg md:text-2xl  ">
						{word}
					</span>
				</span>
			))}
		</div>
	);
}

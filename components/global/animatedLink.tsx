import { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";

type AnimationProps = {
	rest: {
		y: number;
	};
	hover: {
		y: number;
		transition: {
			duration: number;
			ease: number[];
			type: string;
		};
	};
};

const titleAnimation = {
	rest: {
		transition: {
			staggerChildren: 0.01,
		},
	},
	hover: {
		transition: {
			staggerChildren: 0.01,
		},
	},
};

const letterAnimation = {
	rest: {
		y: 0,
	},
	hover: {
		y: -25,
		transition: {
			duration: 0.5,
			ease: [0.6, 0.01, 0.05, 0.95],
			type: "tween",
		},
	},
};

const letterAnimationTwo = {
	rest: {
		y: 25,
	},
	hover: {
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.6, 0.01, 0.05, 0.95],
			type: "tween",
		},
	},
};

const AnimatedLink = ({
	title,
	secondTitle,
	isLink,
	href,
	onClick,
}: {
	title: string;
	secondTitle?: string;
	isLink: boolean;
	href?: string;
	onClick?: () => void;
}) => {
	const [isHovered, setIsHovered] = useState(false);
	return isLink ? (
		<Link
			href={href as string}
			className="relative cursor-pointer flex flex-col overflow-hidden link"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<AnimatedWord
				title={title}
				animations={letterAnimation}
				isHovered={isHovered}
			/>
			<span>
				<AnimatedWord
					title={secondTitle ?? title}
					animations={letterAnimationTwo}
					isHovered={isHovered}
				/>
			</span>
		</Link>
	) : (
		<p
			className="relative cursor-pointer flex flex-col overflow-hidden"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<AnimatedWord
				title={title}
				animations={letterAnimation}
				isHovered={isHovered}
			/>
			<span onClick={onClick}>
				<AnimatedWord
					title={secondTitle ?? title}
					animations={letterAnimationTwo}
					isHovered={isHovered}
				/>
			</span>
		</p>
	);
};

export default AnimatedLink;

const AnimatedWord = ({
	title,
	animations,
	isHovered,
}: {
	title: string;
	animations: AnimationProps;
	isHovered: boolean;
}) => (
	<motion.span
		className="whitespace-nowrap relative"
		variants={titleAnimation}
		initial="rest"
		animate={isHovered ? "hover" : "rest"}
	>
		{title.split("").map((char, i) =>
			char === " " ? (
				<span className="relative inline-block whitespace-nowrap" key={i}>
					&nbsp;
				</span>
			) : (
				<motion.span
					className="relative inline-block whitespace-nowrap"
					variants={animations}
					key={i}
				>
					{char}
				</motion.span>
			)
		)}
	</motion.span>
);

import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			bg: "#f9f7f3",
			white: "#f6f6f6",
			black: "#292929",
			ash: "#7c7c7c",
			brown: "#2f231b",
			"deep-green": "#042f19",
			"light-green": "#146739",
			"lighter-green": "#1dca69",
			"light-brown": "#ad9062",
			"lighter-brown": "#e2dbc6",
		},
		extend: {
			backgroundImage: {
				herosection: "url('/hero-image.webp')",
			},

			keyframes: {
				spinn: {
					from: {
						transform: "rotate(180deg)",
					},
					to: {
						transform: "rotate(360deg)",
					},
				},

				fadeIn: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				blink: {
					"0%": { opacity: "0.2" },
					"20%": { opacity: "1" },
					"100%": { opacity: "0.2" },
				},
			},
			animation: {
				fadeIn: "fadeIn .3s ease-in-out",
				carousel: "marquee 10s linear infinite",
				blink: "blink 1.4s both infinite",
				spinn: "spinn 2s linear infinite",
			},
		},
	},
	plugins: [],
};

export default config;

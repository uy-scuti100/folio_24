import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";

export default function Preloader() {
	const counterElement = useRef(null);
	const countRef = useRef(null);
	const textWrapper = useRef(null);
	const loaderRef = useRef(null);
	const loaderBgRef = useRef(null);
	const loader2Ref = useRef(null);
	const preloaderRef = useRef(null);

	const [currentValue, setCurrentValue] = useState(0);

	useEffect(() => {
		function updateCounter() {
			if (currentValue < 100) {
				let increment = Math.floor(Math.random() * 10) + 1;
				setCurrentValue((prevValue) => Math.min(prevValue + increment, 100));
			}

			let delay = Math.floor(Math.random() * 200) + 25;
			setTimeout(updateCounter, delay);
		}
		updateCounter();

		if (textWrapper.current) {
			const originalText = textWrapper.current.textContent;
			if (originalText) {
				const transformedText = originalText
					.split("") // here i split the text content into an array of characters
					.map(
						(char, index) => `<span class="letter" key=${index}>${char}</span>`
					) // and i wrap each character in a span with the classname  "letter", P.S = i used classname but it didnt work
					.join(""); // then i join the array back into a string

				textWrapper.current.innerHTML = transformedText;
			}
		}

		anime
			.timeline({ loop: false })
			.add({
				targets: ".ml .letter",
				translateY: [-100, 0],
				easing: "easeOutExpo",
				duration: 1200,
				delay: (_, i) => 15 * i,
			})
			.add({
				targets: ".ml .letter",
				translateY: [0, 100],
				easing: "easeOutExpo",
				duration: 2400,
				delay: (_, i) => 1500 + 15 * i,
			});

		gsap.to(loaderRef.current, {
			scale: 0.8,
			ease: "power4.inOut",
			duration: 2,
			delay: 1.7,
		});

		gsap.to(loaderBgRef.current, {
			height: 0,
			ease: "power4.inOut",
			duration: 1.5,
			delay: 2.7,
		});
		gsap.to(loader2Ref.current, {
			height: 0,
			ease: "power4.inOut",
			duration: 1.5,
			delay: 3.7,
		});
		gsap.to(loaderRef.current, {
			height: 0,
			top: "30%",
			ease: "power4.inOut",
			duration: 1.5,
			delay: 3.7,
		});

		gsap.to(preloaderRef.current, {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
			ease: "power4.inOut",
			duration: 1,
			delay: 3.6,
		});
	}, []);
	useGSAP(() => {
		gsap.to(countRef.current, {
			duration: 0.5,
			opacity: 0,
			delay: 2.6,
		});
	});

	return (
		<div className="container">
			<div className="pre-loader" ref={preloaderRef}>
				<div className="loader" ref={loaderRef}>
					<div className="loader-bg" ref={loaderBgRef} />
					<div className="loader-2" ref={loader2Ref} />
				</div>
				<div className="loader-content">
					<div className="count" ref={countRef}>
						<p ref={counterElement}>{currentValue}</p>
					</div>
					<div className="copy">
						<p className="ml" ref={textWrapper}>
							Inkly &nbsp; &nbsp; tattoos.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

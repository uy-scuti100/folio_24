import Image from "next/image";

export default function HeroSection() {
	return (
		<div className="flex justify-center items-center ">
			<div className="w-[500px] h-[500px] relative">
				<Image
					src={"/main-img.jpeg"}
					alt="Main-image"
					fill
					className="w-full h-full object-cover grayscale"
				/>
			</div>
		</div>
	);
}

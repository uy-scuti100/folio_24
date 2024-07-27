import Link from "next/link";

export default function Logo() {
	return (
		<Link href={"/"}>
			<img
				src="/logo.svg"
				alt="logo"
				className="w-full h-full object-contain"
			/>
		</Link>
	);
}

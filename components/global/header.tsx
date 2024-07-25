export default function GlobalHeader() {
	return (
		<header>
			<nav className=" px-3 py-3">
				<div className="relative w-[100px] sm:w-[200px]">
					<img
						src="/logo.svg"
						alt="logo"
						className="w-full h-full object-contain"
					/>
				</div>
			</nav>
		</header>
	);
}

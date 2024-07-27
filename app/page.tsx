import Header from "@/components/global/header";
import HeroSection from "@/components/sections/heroSection/hero-section";
import Services from "@/components/sections/serviceSection/service-section";
export default function Page() {
	return (
		<div className="overflow-x-hidden">
			<Header />
			<HeroSection />
			<Services />
		</div>
	);
}

import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

const LandingLayout = (props: {
	children: React.ReactNode;
}) => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="min-h-[481px]">
				{props.children}
			</main>
			<Footer />
		</div>
	)
}

export default LandingLayout;
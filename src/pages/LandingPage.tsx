import HeroSection from "@/components/molecules/HeroSection";
import "../App.css";
import TimeLine from "@/components/molecules/timeline";
import Testimonials from "@/components/molecules/Testimonials";
import MinimalistFAQSection from "@/components/molecules/FAQ";
import Footer from "@/components/molecules/footer";

const LandingPage = () => {
    return (
        <section className="bg-background min-h-screen">
            <HeroSection />
            <TimeLine />
            <Testimonials />
            <MinimalistFAQSection />
            <Footer />
        </section>
    );
};
export default LandingPage;

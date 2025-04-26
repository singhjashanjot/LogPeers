import HeroSection from "@/components/molecules/HeroSection";
import "../App.css";
import TimeLine from "@/components/molecules/timeline";
import Testimonials from "@/components/molecules/Testimonials";
import MinimalistFAQSection from "@/components/molecules/FAQ";
import Footer from "@/components/molecules/footer";

const LandingPage = () => {
    return (
        <section className="bg-background min-h-screen">
            <div className="pb-0 md:pb-4"> {/* Added padding-bottom control */}
                <HeroSection />
            </div>
            <div className="mt-0"> {/* Removed any top margin */}
                <TimeLine />
            </div>
            <Testimonials />
            <MinimalistFAQSection />
            <Footer />
        </section>
    );
};
export default LandingPage;

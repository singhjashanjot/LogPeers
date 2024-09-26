import ParticlesBackground from "../components/Particlesbackground";
import "../App.css";
import TimeLine from "@/components/timeline";
import { MarqueeDemo } from "@/components/Testimonials";
import MinimalistFAQSection from "@/components/FAQ";

const LandingPage = () => {
    return (
        <section className=" bg-green-50 dark:bg-black min-h-screen ">
            <ParticlesBackground />
            <TimeLine />
            <MarqueeDemo />
            <MinimalistFAQSection/>
        </section>
    );
};
export default LandingPage;

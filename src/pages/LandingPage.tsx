import ParticlesBackground from "../components/Particlesbackground";
import "../App.css";
import TimeLine from "@/components/timeline";

const LandingPage = () => {
    return (
        <section className=" bg-green-50 dark:bg-black min-h-screen ">
            <ParticlesBackground />
            <TimeLine/>
        </section>
    );
};
export default LandingPage;

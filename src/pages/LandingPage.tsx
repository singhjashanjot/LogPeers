import DockDemo from "../components/dock";
import herovideo from "../assets/videos/macbook low.mp4";
import "../App.css";
const LandingPage = () => {
    return (
        
        <div className="w-full h-screen f1f0ee">
            <DockDemo />
            {/* <video
                className="absolute w-full h-full object-cover"
                src={herovideo}
                autoPlay
                loop
                muted
            /> */}
            <div className="relative z-10 flex items-center justify-center h-screen text-center text-white">
                <div className="px-6 py-12 md:px-12 md:py-24">
                    <h1 className="md:text-7xl mb-4 crazyfont text-black font-medium text-8xl">
                        Welcome to Our Platform
                    </h1>
                    <p className="text-lg md:text-2xl mb-8 text-black">
                        Empowering your learning experience with the best tools
                        and resources.
                    </p>
                    <a
                        href="#features"
                        className="inline-block px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold text-lg transition duration-300 hover:bg-blue-700"
                    >
                        Explore Features
                    </a>
                </div>
            </div>
                
        </div>
    );
};
export default LandingPage;

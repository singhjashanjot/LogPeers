import "../App.css";

const LandingPage = () => {
    return (

        <div className="w-full h-screen text-black dark:bg-black ">
          
            <div className="relative flex items-center justify-center h-screen text-center text-white">
                <div className="px-6 py-12 md:px-12 md:py-24">
                    <h1 className="md:text-7xl mb-4 crazyfont text-black font-medium text-8xl dark:text-slate-100">
                        Welcome to LogPeers
                    </h1>
                    <p className="text-lg md:text-2xl mb-8 text-black dark:text-slate-100">
                    LogPeers is a minimalist, all-in-one e-learning platform bringing together curated, verified notes and study materials, designed for efficient and focused learning.
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

import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="text-black dark:text-white py-6 bg-gray-50/90 dark:bg-gray-900/20 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 shadow-sm mt-8">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center px-4 md:px-8">
                <div className="mb-4 md:mb-0">
                    <h2 className="crazyfont text-lg font-bold">LogPeers</h2>
                    <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">Simplifying your learning experience.</p>
                </div>
                <div className="flex flex-wrap justify-center space-x-4 md:ml-auto mb-4 md:mb-0">
                    <Link to="/" className="hover:text-gray-400 transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-gray-400 transition-colors">About</Link>
                    <Link to="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
                    <Link to="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-400 transition-colors"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="hover:text-gray-400 transition-colors"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="hover:text-gray-400 transition-colors"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="text-center mt-6 text-sm px-4 text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} LogPeers. All rights reserved.
            </div>
        </footer>
    );
}

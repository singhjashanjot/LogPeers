import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="text-black dark:text-white py-6 bg-background border border-gray-200 dark:border-gray-800">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div>
                    <h2 className="crazyfont text-lg font-bold">LogPeers</h2>
                    <p className="text-sm mt-2">Simplifying your learning experience.</p>
                </div>
                <div className="flex space-x-4 ml-auto">
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                    <Link to="/about" className="hover:text-gray-400">About</Link>
                    <Link to="/contact" className="hover:text-gray-400">Contact</Link>
                    <Link to="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="text-center mt-4 text-sm px-4">
                &copy; 2024 LogPeers. All rights reserved.
            </div>
        </footer>
    );
}

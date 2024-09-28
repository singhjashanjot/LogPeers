export default function Footer() {
    return (
        <footer className=" text-black dark:text-white py-6 bg-background border">
            <div className="container mx-auto flex justify-between  items-center">
                <div>
                    <h2 className="text-lg font-bold">LogPeers</h2>
                    <p className="text-sm mt-2">
                        Simplifying your learning experience.
                    </p>
                </div>
                <div className="flex space-x-4 ml-auto">
                    <a href="#" className="hover:text-gray-400">
                        Home
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        About
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        Contact
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        Privacy Policy
                    </a>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-400">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div className="text-center mt-4 text-sm">
                &copy; 2024 LogPeers. All rights reserved.
            </div>
        </footer>
    );
}

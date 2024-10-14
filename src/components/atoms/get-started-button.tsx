import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const GetStartedButton = () => {
    return (
        <Link
            to="/about"
            className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none border focus-visible:ring-2 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50 bg-white text-black shadow hover:bg-gray-100 h-10 px-6 py-2.5 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-full transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
        >
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-black opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
            <div className="flex items-center  gap-2">
                <span className="flex items-center">
                    <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-10V5a1 1 0 10-2 0v3H6a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <span className="ml-2">Get Started</span>{" "}
                </span>
                <ArrowRightIcon></ArrowRightIcon>
            </div>
        </Link>
    );
};
export default GetStartedButton;

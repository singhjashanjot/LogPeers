import { useState } from "react";
import "./Hamburger.css"; // Import your CSS file

interface HamburgerButtonProps {
    onClick?: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onClick }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        if (onClick) onClick(); // Call the onClick handler passed as prop
    };

    return (
        <div className="buttons__burger z-[100]" onClick={handleToggle}>
            <input
                type="checkbox"
                id="burger"
                checked={isChecked}
                onChange={handleToggle} // Attach handleToggle to onChange
                className="hidden" // Keep the checkbox hidden
            ></input>
            <span className="border-2 bg-black dark:bg-white"></span>
            <span className="border-2 bg-black dark:bg-white"></span>
            <span className="border-2 bg-black dark:bg-white"></span>
        </div>
    );
};

export default HamburgerButton;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "@/components/Navbar"; // Import your component
import LandingPage from "./pages/LandingPage";
import "./index.css";
import { ReactLenis } from "lenis/react"; // Correct import for ReactLenis

function App() {
    return (
        // Set the "lerp" (linear interpolation) value to a lower value for faster scrolling
        <ReactLenis root options={{ lerp: 0.2 }}>
            <Router>
                <div className="App selection:bg-slate-200 selection:text-black">
                    <div className="">
                        <NavBar />
                    </div>

                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/learnings" element={<Learnings />} />
                        <Route path="/notes" element={<Notes />} />
                        <Route path="/about" />
                    </Routes>
                </div>
            </Router>
        </ReactLenis>
    );
}

// Example Components for Routing
const Learnings = () => <div>Learnings page</div>;
const Notes = () => <div>Notes page</div>;

export default App;

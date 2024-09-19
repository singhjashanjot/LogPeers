import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavigationMenuDemo } from "@/components/Navbar"; // Import your component
import LandingPage from './pages/LandingPage';
import './index.css';
import { ReactLenis } from 'lenis/react'; // Correct import for ReactLenis

function App() {
  return (
    // Set the "lerp" (linear interpolation) value to a lower value for faster scrolling
    <ReactLenis root options={{ lerp: 0.4 }}>
      <Router>
        <div className="App">
          <div className='sticky top-0'>
            <NavigationMenuDemo />
          </div>

          <Routes>
            <Route path="/notes" element={<Documentation />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </ReactLenis>
  );
}

// Example Components for Routing
const Documentation = () => <div>Documentation Page</div>;

export default App;

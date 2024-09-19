import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavigationMenuDemo } from "@/components/Navbar" // Import your component
import LandingPage from './pages/LandingPage';

// import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <NavigationMenuDemo />
        </div>

        <Routes>
          <Route path="/notes" element={<Documentation />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>

    </Router>
  );
}

// Example Components for Routing
const Documentation = () => <div>Documentation Page</div>;

export default App;

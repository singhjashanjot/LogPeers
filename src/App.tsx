// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavigationMenuDemo } from "@/components/newnav" // Import your component

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">

        <NavigationMenuDemo />

        {/* Define routes */}
        <Routes>
          <Route path="/docs" element={<Documentation />} />
          <Route path="/" element={<Home />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

// Example Components for Routing
const Documentation = () => <div>Documentation Page</div>;
const Home = () => <div>Home Page</div>;

export default App;

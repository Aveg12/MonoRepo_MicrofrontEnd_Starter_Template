import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Load remote components via Module Federation
const Dashboard = lazy(() => import('dashboard/Dashboard'));
const Profile = lazy(() => import('profile/Profile'));

const App = () => (
  <Router>
    <nav style={{ padding: 16 }}>
      <Link to="/" style={{ marginRight: 12 }}>Home</Link>
      <Link to="/dashboard" style={{ marginRight: 12 }}>Dashboard</Link>
      <Link to="/profile">Profile</Link>
    </nav>

    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<h1>Shell App (Home)</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;

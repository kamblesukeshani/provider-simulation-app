import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Providers from './pages/Providers';
import ProviderDetail from './pages/ProviderDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Providers />} />
        <Route path="/provider/:id" element={<ProviderDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

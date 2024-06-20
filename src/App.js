import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import { pages } from './pages';

const { Home, First } = pages;

const App = () => {
  return (
    <Router basename={process.env.REACT_APP_URI}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="first" element={<First />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

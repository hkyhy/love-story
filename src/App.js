import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from "./layout/Layout";
import {pages} from "./pages";

const {Home, First} = pages;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="first" element={<First />} />
      </Route>
    </Routes>
  )
};

export default App;

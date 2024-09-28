import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import TestingPage from './TestingPage'; // Create this component

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/testing" element={<TestingPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

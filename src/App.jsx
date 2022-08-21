import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Main from './pages/main';
import NewPlan from './pages/newPlan';
import Feedback from './pages/feedback';
// 
import TestCanvasAPI from './pages/testCanvasAPI';

function App () {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/newPlan" element={<NewPlan/>} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/api" element={<TestCanvasAPI/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

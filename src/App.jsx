import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Main from './pages/main';
import NewPlan from './pages/newPlan';
import Feedback from './pages/feedback';
import BSP from './pages/BSP';
import BSP_1 from './pages/BSP_1';
import BSP_2 from './pages/BSP_2';
import BSP_3 from './pages/BSP_3';
import BSP_4 from './pages/BSP_4';
import BSP_5 from './pages/BSP_5';
import BSP_6 from './pages/BSP_6';
import Preview from './pages/preview'
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
        <Route path="/BSP" element={<BSP/>}/>
        <Route path="/BSP_1" element={<BSP_1/>}/>
        <Route path="/BSP_2" element={<BSP_2/>}/>
        <Route path="/BSP_3" element={<BSP_3/>}/>
        <Route path="/BSP_4" element={<BSP_4/>}/>
        <Route path="/BSP_5" element={<BSP_5/>}/>
        <Route path="/BSP_6" element={<BSP_6/>}/>
        <Route path="/Preview" element={<Preview/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

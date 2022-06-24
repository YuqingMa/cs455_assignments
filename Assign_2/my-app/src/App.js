import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import React from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import About from './components/about';
import Nav from './components/navbar/nav'
function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/about" element = {<About />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import ThreeContainer from './components/ThreeContainer';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <div className='context'>
        <Sidebar></Sidebar>
        <ThreeContainer />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

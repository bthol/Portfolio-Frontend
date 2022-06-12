import './App.css';
// import React, { useState } from 'react';
import { Header } from "./Header/Header";
import { MainDisplay } from './MainDisplay/MainDisplay';
import { Footer } from './Footer/Footer';

function App() {
  // const [tog1, setTog1] = useState(false)
  // const toggle = () => {
  //   setTog1(!tog1)
  // }
  return (
    <div className="App">
      <Header></Header>
      <MainDisplay></MainDisplay>
      <Footer></Footer>
    </div>
  );
};

export default App;
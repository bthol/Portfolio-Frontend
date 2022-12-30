import React, { useState } from 'react';
import './App.css';
import { HomePage } from './Pages/HomePage';

function App() {
  const pageInfo = [
    {name: "HomePage"},
    {name: "TemplatePage"},
  ];
  
  const [page, setPage] = useState(1);
  
  if (page == 1) { return (<HomePage />)}
  // if (TemplatePage) { return (<TemplatePage />)}
};

export default App;
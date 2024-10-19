
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const c = 'Nandini';
  const[progress,changeProgress] = useState(0);


const setProgress = (progress)=>{
  changeProgress(progress);
}
  
    return (
      <>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(progress)}/>
         
        <NavBar/>
        <Routes>
         

          <Route exact path="/" element={<News setProgress={setProgress} key="general" country="us" pageSize="6" category="general"/>} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" country="us" pageSize="6" category="business"/>} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" country="us" pageSize="6" category="entertainment"/>} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" country="us" pageSize="6" category="health"/>} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" country="us" pageSize="6" category="science"/>} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" country="us" pageSize="6" category="sports"/>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" country="us" pageSize="6" category="technology"/>} />
          
        </Routes>
        </BrowserRouter>
        
      </>
    )
  
}

export default App;


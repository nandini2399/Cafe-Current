
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  c = 'Nandini';

state = {
  progress : 0
}

setProgress = (progress)=>{
  this.setState({progress:progress})
}
  render() {
    return (
      <>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(this.state.progress)}/>
         
        <NavBar/>
        <Routes>
         

          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" country="us" pageSize="6" category="general"/>} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" country="us" pageSize="6" category="business"/>} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" country="us" pageSize="6" category="entertainment"/>} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" country="us" pageSize="6" category="health"/>} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" country="us" pageSize="6" category="science"/>} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" country="us" pageSize="6" category="sports"/>} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" country="us" pageSize="6" category="technology"/>} />
          
        </Routes>
        </BrowserRouter>
        
      </>
    )
  }
}


/*eslint-disable*/
import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/home';
import Header from './components/header';
import Quote from './components/quote';
import Footer from './components/footer';
import About from './components/about';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Home/>
          <About/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

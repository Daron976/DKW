import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Home />
          <About />
          <Projects />
          <Contact />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

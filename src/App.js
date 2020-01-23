import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import './sass/main.scss';
import NavBar from './components/Navbar';
import Slider from './components/Slider';
import Services from './components/Services';
import Players from './components/Players';
import Lorem from './components/Lorem';
import Footer from './components/Footer';

class App extends Component {
  render () {
    return (
      <BrowserRouter className="App">
        <NavBar />
        <Slider />
        <Services />
        <Players />
        <Lorem />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

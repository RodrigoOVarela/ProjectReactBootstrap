import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
            aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <section className="collapse navbar-collapse" id="navbarMainToggler">
            <a className="navbar-brand" href="#"><i className="fas fa-eye"></i>&nbsp;Logo</a>
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#">Home</a>
              <a className="nav-item nav-link" href="#">Chanel</a>
              <a className="nav-item nav-link" href="#">Login</a>
            </div>
          </section>


        </nav>
      </div>
    );
  }
}

export default App;

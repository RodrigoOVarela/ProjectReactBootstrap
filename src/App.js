import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
render() {
return (
<div className="container-fluid p-0">
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">

    <a className="navbar-brand" href="#"><i className="fas fa-eye"></i>&nbsp;Dev App React</a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
      aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <section className="collapse navbar-collapse" id="navbarMainToggler">
      <div className="navbar-nav ml-auto pr-3">
        <a className="nav-item nav-link" href="#">Home</a>
        <a className="nav-item nav-link" href="#">Chanel</a>
        <a className="nav-item nav-link" href="#">Login</a>
      </div>

      <form className="form-line">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">@</span>
          </div>
          <input type="text" className="form-control mr-3" placeholder="Username" />&nbsp;
          <button className="btn btn-outline-success">Login</button>
        </div>
      </form>
    </section>
  </nav>

  <section className="container p-2">
    <ul class="list-unstyled">
      <li class="media pt-2">
        <img src="http://via.placeholder.com/150/771796" alt="" className="mr-3" />
        <div className="media-body">
          <h5 className="mt-0 mb-1">REACT</h5>
          <p>There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected humour.</p>
        </div>
      </li>
      <li class="media pt-2">
        <img src="http://via.placeholder.com/150/771796" alt="" className="mr-3" />
        <div className="media-body">
          <h5 className="mt-0 mb-1">REACT</h5>
          <p>There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected humour.</p>
        </div>
      </li>
      <li class="media pt-2">
        <img src="http://via.placeholder.com/150/771796" alt="" className="mr-3" />
        <div className="media-body">
          <h5 className="mt-0 mb-1">REACT</h5>
          <p>There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected humour.</p>
        </div>
      </li>
      <li class="media pt-2">
          <img src="http://via.placeholder.com/150/771796" alt="" className="mr-3" />
          <div className="media-body">
            <h5 className="mt-0 mb-1">REACT</h5>
            <p>There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected humour.</p>
          </div>
        </li>
        <li class="media pt-2">
            <img src="http://via.placeholder.com/150/771796" alt="" className="mr-3" />
            <div className="media-body">
              <h5 className="mt-0 mb-1">REACT</h5>
              <p>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour.</p>
            </div>
          </li>
          <li class="media pt-2">
              <img src="http://via.placeholder.com/150/771796" alt="" className="mr-3" />
              <div className="media-body">
                <h5 className="mt-0 mb-1">REACT</h5>
                <p>There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected humour.</p>
              </div>
            </li>
    </ul>
  </section>

  <footer className="container col-12 pt-3 footer bg-dark text-light text-center">
    <container className="container col-8 col-md-4 col-md-lg-4 d-flex justify-content-around">
      <i className="fab fa-facebook"></i>
      <i className="fab fa-linkedin"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-twitter-square"></i>
    </container>
  </footer>

</div>
);
}
}

export default App;
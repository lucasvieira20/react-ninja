import React from 'react';

const Header = () => (
  <header className="header">
    <div className="container">
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a href="#" className="navbar-brand"> GitHubApp </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" value="" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search an User</button>
          </form>
        </div>
      </nav>
    </div>
  </header>
)

export default Header;
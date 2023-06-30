import React, { Component } from 'react'


export class navbar extends Component {
 
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><b><strong>News Circle</strong></b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><b>Home</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><b>About</b></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>Categories</b>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Sports</a></li>
            <li><a className="dropdown-item" href="/">Politics</a></li>
            <li><a className="dropdown-item" href="/">E-sports</a></li>
            <li><a className="dropdown-item" href="/">Top 100 news of this week</a></li>
            <li><a className="dropdown-item" href="/">Top 10 news of the day</a></li>

          </ul>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default navbar

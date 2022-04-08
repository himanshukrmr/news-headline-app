import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/general">HKNews</Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
        </li>
        <li className="nav-item"><Link className='nav-link' to='/Business'>Business</Link></li>
        <li className="nav-item"><Link className='nav-link' to='/Entertainment'>Entertainment</Link></li>

        <li className="nav-item"><Link className='nav-link' to='/General'>General</Link></li>

        <li className="nav-item"><Link className='nav-link' to='/Health'>Health</Link></li>

        <li className="nav-item"><Link className='nav-link' to='/Science'>Science</Link></li>

        <li className="nav-item"><Link className='nav-link' to='/Sports'>Sports</Link></li>
        <li className="nav-item"><Link className='nav-link' to='/Technology'>Technology</Link></li>
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar

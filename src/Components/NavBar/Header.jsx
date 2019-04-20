import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Header = () =>(
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <Link to='/' className='navbar-brand'><span>CFTV.Live</span></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'><Link className='nav-link' to='/CarFeverTV'>Cars</Link></li>
        <li className='nav-item'><Link className='nav-link' to='/CycleFeverTV'>Bikes</Link></li>
        <li className='nav-item'><Link className='nav-link' to='/Events'>Events</Link></li>
        <li className='nav-item'><Link className='nav-link' to='/About'>About</Link></li>
        <li className='nav-item'><Link className='nav-link' to='/Sponsors'>Sponsors</Link></li>
      </ul>
    </div>
  </nav>
);

export default withRouter(Header);

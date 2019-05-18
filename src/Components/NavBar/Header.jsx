import React from 'react';
import Logo from '../../Images/logo2.png';
import {Link, withRouter} from 'react-router-dom';

const Header = () =>(
  <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
    <Link to='/' className='navbar-brand'><img src={Logo} alt='logo' className='logo'></img></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'><Link className='nav-link' to='/CycleFeverTV'>CycleFeverTV</Link></li>
        <li className='nav-item'><Link className='nav-link' to='/CarFeverTV'>CarFeverTV</Link></li>
        <li className='nav-item'><Link className='nav-link' to='/Events'>SpecialEvents</Link></li>
        <li className='nav-item'><Link className='nav-link' to='/About'>About</Link></li>
        <li className='nav-item'><Link className='nav-link' to='/Sponsors'>Sponsors</Link></li>
      </ul>
      <span className='navbar-text'>
        <a className='icon' href='https://facebook.com/CycleFeverTV' target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook-f'></i></a>
        <a className='icon' href='https://twitter.com/CycleFeverTV' target='_blank' rel='noopener noreferrer'><i className='fab fa-twitter'></i></a>
        <a className='icon' href='https://www.youtube.com/channel/UC5lBCpUunSuN3lCxxTfkunA' target='_blank' rel='noopener noreferrer'><i className='fab fa-youtube'></i></a>
        <a className='icon' href='https://www.instagram.com/cyclefevertv/' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i></a>
        <a className='icon' href='mailto:cftv@email.com'><i className='fas fa-envelope'></i></a>
      </span>
    </div>
  </nav>
);

export default withRouter(Header);

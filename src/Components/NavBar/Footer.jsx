import React from 'react';

const Footer = () =>(
  <footer className='page-footer'>
    <ul className='nav justify-content-center'>
     <li className='nav-link'>&copy;2019 <span style={{color:'#fc0100'}}>CFTV</span></li>
     <li className='nav-item'>
       <a href='https://www.facebook.com/cftv.live19' className='nav-link'><i className='fab fa-facebook-f'></i></a>
     </li>
     <li className='nav-item'>
        <a href='https://twitter.com/CycleFeverTV' className='nav-link'><i className='fab fa-twitter'></i></a>
      </li>
      <li className='nav-item'>
        <a href='https://www.instagram.com/cyclefevertv/' className='nav-link'><i className='fab fa-instagram'></i></a>
      </li>
      <li className='nav-item'>
        <a href='https://www.youtube.com/channel/UC5lBCpUunSuN3lCxxTfkunA' className='nav-link'><i className='fab fa-youtube'></i></a>
      </li>
      <li className='nav-item'>
        <a href='mailto:cftv@email.com' className='nav-link'><i className='fas fa-envelope' style={{color:'#82b1ff',fontSize:'1.3em'}}></i></a>
      </li>
   </ul>
  </footer>
);

export default Footer;

import React from 'react';
import jMeyers from '../Images/jlogo.jpg';
import Ace from '../Images/logo.png';

const Sponsors = () =>(

    <div className='container' style={{marginTop:100}}>
      <h1 className='text-center'>Sponsors</h1>
      <div className='card'>
        <div className='card-body'>
          <p className='card-text text-center'>Special Thanks to everyone for their support including:</p>
          <p className='card-text text-center'>Looking to advertise with us or would like more infomation? <a href='mailto:cftv@email.com'>Let us know!</a></p>
        </div>
      </div>
      <div className='row' style={{marginBottom:200}}>
        <div className='col-sm'>
          <div className='card' style={{backgroundColor:'transparent',border:'none'}}>
            <div className='card-body'>
              <a href='https://www.acecafeusa.com/' target='_blank' rel='noopener noreferrer'><img className='card-img-top' src={Ace} alt='Ace Cafe'/></a>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className='card' style={{backgroundColor:'transparent',border:'none'}}>
            <div className='card-body'>
              <a href='http://www.jmeyers.com/' target='_blank' rel='noopener noreferrer'><img className='card-img-top' src={jMeyers} alt='jMeyers'/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Sponsors;

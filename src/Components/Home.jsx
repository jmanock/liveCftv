import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import WatchLive from './WatchLive';
import UpcomingEvents from './UpcomingEvents';
import PastEvents from './PastEvents';
import Logo from '../Images/logo2.png';

const Home = () =>{

  return(
    <div className='container'>

      <section style={{marginTop:100}} className='tabs'>
        <Tabs defaultActiveKey='WatchLive' id='uncontrolled-tab-example'>
          <Tab eventKey='WatchLive' title='Watch Live'>
            <WatchLive />
          </Tab>
          <Tab eventKey='Upcoming' title='Upcoming Events'>
            <UpcomingEvents />
          </Tab>
          <Tab eventKey='Past' title='Past Events'>
            <PastEvents />
          </Tab>
        </Tabs>
      </section>
      
      <section>
        <div className='card'>
          <div className='card-body'>
            <h3 className='card-title text-center'>Who We Are</h3>
            <p className='card-text'><img src={Logo} className='logo' alt='logo'></img> We are a team, that films &amp; streams live events. We provide post production and create polished show reel from the live event for use by the customer, including or not adverts and other such enhancements. We also build our social following as well as customer social following. We market and distribute content and provide a 24/7 streaming channel.</p>
          </div>
        </div>
      </section>
      <section>
        <div className='card'>
          <div className='card-body'>
            <h3 className='card-title text-center'>What We Do and Why</h3>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Provide local resources information in a video magazine format</li>
              <li className='list-group-item'>Provide a platform to advertise products, events, and locations to a key known audience</li>
              <li className='list-group-item'>Create partnerships with key companies who have a shared ethos</li>
              <li className='list-group-item'>In the future, we will bring on more platforms and more outlets to bring the messgae to a greater audience</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className='card'>
          <div className='card-body'>
            <h3 className='card-title text-center'>What Motivates Us</h3>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>We have over 40 years of TV Production and Presenting Experience</li>
              <li className='list-group-item'>We want to do something different</li>
              <li className='list-group-item'>We want to meet a need from the community</li>
              <li className='list-group-item'>We want to provide a quality service</li>
              <li className='list-group-item'>We will follow the technology path for delivery/distribution</li>
              <li className='list-group-item'>We are building on our following: Viewers, Followers, Fans</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;

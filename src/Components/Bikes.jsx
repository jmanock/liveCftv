import React from 'react';
import CalendarBike from './Calendar/CalendarBike';

const Bikes = () =>(
  <div style={{marginTop:100}} className='container'>
    <h1 className='text-center'>CycleFeverTV</h1>
    <div className='card infoCard'>
      <p className='card-text text-center'>This is the place for all things MOTORCYCLE'S!</p>
      <p className='card-text text-center'><a href='mailto:cftv@email.com'>Have a MOTORCYCLE Event, Meetup, Rally, let us know and we will add it to the calendar!</a></p>
    </div>
    <CalendarBike />
  </div>

);

export default Bikes;

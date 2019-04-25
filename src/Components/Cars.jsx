import React from 'react';
import CalendarCars from './Calendar/CalendarCars';

const Cars = () =>(
  <div style={{marginTop:100}} className='container'>
    <h1 className='text-center'>CarFeverTV</h1>
    <div className='card infoCard'>
      <p className='card-text text-center'>This is the place for all things CAR'S!</p>
      <p className='card-text text-center'><a href='mailto:cftv@email.com'>Have a CAR Event, Meetup, Rally, let us know and we will add it to the calendar!</a></p>
    </div>
    <CalendarCars />
  </div>
);

export default Cars;

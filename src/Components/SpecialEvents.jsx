import React from 'react';
import CalendarSpecial from './Calendar/CalendarSpecial';

const Events = () =>(
  <div className='container' style={{marginTop:100}}>
    <h1 className='text-center'>SpecialEvents</h1>
    <div className='card infoCard'>
      <p className='card-text text-center'>Special Events include: Sporting Events, Charity Events, Concerts &amp; much MORE.</p>
      <p className='card-text text-center'><a href='mailto:cftv@email.com'>Have a Special Event, let us know and we will add it to the calendar!</a></p>
    </div>
    <CalendarSpecial />
  </div>

);

export default Events;

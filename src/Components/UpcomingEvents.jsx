import React from 'react';

const UpcomingEvents = () =>(
  <table className='table table-striped'>
    <thead>
      <tr>
        <th scope='col'>Date</th>
        <th scope='col'>Name</th>
        <th scope='col'>Time</th>
        <th scope='col'>Location</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>4/25/19</td>
        <td>Bike Night</td>
        <td>8:00pm</td>
        <td>Ace Cafe Orlando</td>
      </tr>
      <tr>
        <td>4/26/19 ~ 4/28/19</td>
        <td>Leesburg Bike Week</td>
        <td>T.B.A.</td>
        <td>Leesburg</td>
      </tr>
      <tr>
        <td>5/9/19</td>
        <td>Bike Night</td>
        <td>7:30pm</td>
        <td>Ace Cafe Orlando</td>
      </tr>
      <tr>
        <td>5/12/19</td>
        <td>Orlando Preds</td>
        <td>5:00pm</td>
        <td>Amway Center</td>
      </tr>
      <tr>
        <td>5/13/19</td>
        <td>Porsche Night</td>
        <td>7:30pm</td>
        <td>Ace Cafe Orlando</td>
      </tr>
      <tr>
        <td>5/18/19</td>
        <td>VFW Kisseme Ride</td>
        <td>T.B.A.</td>
        <td>Kisseme Lake Front</td>
      </tr>
    </tbody>
  </table>
);

export default UpcomingEvents;

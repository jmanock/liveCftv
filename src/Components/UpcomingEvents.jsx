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
        <th scope='row'>4/25/19</th>
        <td>Bike Night</td>
        <td>7:30pm</td>
        <td>Ace Cafe Orlando</td>
      </tr>
      <tr>
        <th scope='row'>4/26/19 ~ 4/28/19</th>
        <td>Leesburg Bike Week</td>
        <td>T.B.A.</td>
        <td>Leesburg</td>
      </tr>
      <tr>
        <th scope='row'>5/9/19</th>
        <td>Bike Night</td>
        <td>7:30pm</td>
        <td>Ace Cafe Orlando</td>
      </tr>
      <tr>
        <th scope='row'>5/12/19</th>
        <td>Orlando Preds</td>
        <td>5:00pm</td>
        <td>Amway Center</td>
      </tr>
      <tr>
        <th scope='row'>5/13/19</th>
        <td>Porsche Night</td>
        <td>7:30pm</td>
        <td>Ace Cafe Orlando</td>
      </tr>
      <tr>
        <th scope='row'>5/18/19</th>
        <td>VFW Kisseme Ride</td>
        <td>T.B.A.</td>
        <td>Kisseme Lake Front</td>
      </tr>
    </tbody>
  </table>
);

export default UpcomingEvents;

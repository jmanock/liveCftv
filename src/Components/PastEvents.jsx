import React from 'react';

const PastEvents = () =>(
  <table className='table tabel-striped'>
    <thead>
      <tr>
        <th scope='col'>Date</th>
        <th scope='col'>Name</th>
        <th scope='col'>Length</th>
        <th scope='col'>Location</th>
        <th scope='col'>Watch</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'></th>
        <td>Orlando Predators</td>
        <td>Amway Center</td>
        <td><button type='button'>Watch</button></td>
      </tr>
      <tr>
        <th scope='row'></th>
        <td>Bike Night</td>
        <td>Ace Cafe</td>
        <td><button type='button'>Watch</button></td>
      </tr>
      <tr>
        <th scope='row'></th>
        <td>Porsche Night</td>
        <td>Ace Cafe</td>
        <td><button type='button'>Watch</button></td>
      </tr>
    </tbody>
  </table>
);

export default PastEvents;

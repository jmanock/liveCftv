import React,{Component} from 'react';

const Events = [
  {date:'5-9-2019', name:'Bike Night', time:'7:30pm', location:'Ace Cafe Orlando'},
  {date:'5-12-2019', name:'Orlando Predators Game', time:'5:00pm', location:'Amway Center'},
  {date:'5-13-2019', name:'Porsche Night', time:'7:30pm', location:'Ace Cafe Orlando'},
  {date:'5-18-2019', name:'VFW Kissimmee Ride', time:'T.B.A.', location:'Kissimmee'},
  {date:'5-23-2019', name:'Bike Night', time:'7:30pm', location:'Ace Cafe Orlando'}
];

class UpcomingEvents extends Component{
  render(){
    const something = Events.map((data, index) =>{
      return <tr key={index}>
        <td>{data.date}</td>
        <td>{data.name}</td>
        <td>{data.time}</td>
        <td>{data.location}</td>
      </tr>
    })
    return(
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
          {something}
        </tbody>
      </table>
    )
  }
}


export default UpcomingEvents;

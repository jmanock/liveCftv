import React,{Component} from 'react';

const Events = [
  {date:'7-5-2019', name:'Jacksonville Sharks @ Orlando Predators', time:'7:30pm', location:'Amway Center'},
  {date:'7-11-2019', name:'Bike Night', time:'8:00pm', location:'Ace Cafe Orlando'},
  {date:'7-13-2019', name:'Orlando Predators @ Carolina Cobras', time:'7:00pm', location:'Greensboro Coliseum'},
  {date:'7-15-2019', name:'Porsche Night', time:'7:30pm', location:'Ace Cafe Orlando'},
  {date:'7-19-2019', name:'Columbus Lions @ Orlando Predators', time:'7:00pm', location:'Amway Center'},
  {date:'7-25-2019', name:'Bike Night', time:'8:00pm', location:'Ace Cafe Orlando'},
  {date:'7-27-2019', name:'Orlando Predators @ Jacksonville Sharks', time:'7:00pm', location:'Jacksonville Veterans Memorial Arena'},
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

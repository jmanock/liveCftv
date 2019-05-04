import React,{Component} from 'react';

const Events = [
  {date:'5-4-2019', name:'Orlando Predators @ Columbus Lions', time:'7:00pm', location:'Columbus Civic Center'},
  {date:'5-9-2019', name:'Bike Night', time:'8:00pm', location:'Ace Cafe Orlando'},
  {date:'5-12-2019', name:'New York Sheets @ Orlando Predators', time:'5:00pm', location:'Amway Center'},
  {date:'5-13-2019', name:'Porsche Night', time:'7:30pm', location:'Ace Cafe Orlando'},
  {date:'5-18-2019', name:'Orlando Predators @ Jacksonville Sharks', time:'7:00pm', location:'Jacksonville Veterans Memorial Arena'},
  {date:'5-18-2019', name:'Armed Forces Day with Harlequin', time:'6:00pm', location:'Kissimmee'},
  {date:'5-23-2019', name:'Bike Night', time:'7:30pm', location:'Ace Cafe Orlando'},
  {date:'5-25-2019', name:'Orlando Predators @ Carolina Cobras', time:'7:00pm', location:'Greensboro Coliseum'},
  {date:'5-31-2019', name:'Jacksonville Sharks @ Orlando Predators', time:'7:00pm', location:'Amway Center'},
  {date:'6-13-2019', name:'Bike Night', time:'8:00pm', location:'Ace Cafe Orlando'},
  {date:'6-15-2019', name:'Massachusetts Pirates @ Orlando Predators', time:'7:00pm', location:'Amway Center'},
  {date:'6-17-2019', name:'Porsche Night', time:'7:30pm', location:'Ace Cafe Orlando'},
  {date:'6-27-2019', name:'Bike Night', time:'8:00pm', location:'Ace Cafe Orlando'},
  {date:'6-30-2019', name:'Carolina Cobras @ Orlando Predators', time:'5:30pm', location:'Amway Center'},
  {date:'7-5-2019', name:'Jacksonville Sharks @ Orlando Predators', time:'7:00pm', location:'Amway Center'},
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

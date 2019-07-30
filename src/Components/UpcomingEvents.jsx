import React,{Component} from 'react';

const Events = [
  {date:'8-8-2019', name:'Bike Night', time:'8:00pm', location:'Ace Cafe Orlando'},
  {date:'8-19-2019', name:'Porsche Night', time:'7:30pm', location:'Ace Cafe Orlando'},
  {date:'8-22-2019', name:'Bike Night', time:'8:00pm', location:'Ace Cafe Orlando'},
  {date:'9-12-2019', name:'Bike Night', time:'8:00pm', location:'Ace Cafe Orlando'},
  {date:'9-16-2019', name:'Porsche Night', time:'7:30pm', location:'Ace Cafe Orlando'}
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

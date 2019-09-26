import React,{Component} from 'react';

const Events = [
  {date:'9-26-2019', name:'Bike Night', time:'8:00pm', location:'Ace Cafe Orlando'},
  {date:'10-10-2019', name:'Bike Night', time:'8:00pm', location:'Ace Cafe Orlando'},
  {date:'10-21-2019', name:'Porsche Night', time:'7:30pm', location:'Ace Cafe Orlando'},
  {date:'10-17-2019 ~ 10-20-2019', name:'Biketoberfest', time:'All Day', location:'Dayton Beach'},
  {date:'10-24-2019', name:'Bike Night', time:'8:00pm', location:'Ace Cafe Orlando'},
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

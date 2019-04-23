export default{
  getBikeEvents:() =>{
    const eventMeta = [
      {start:'2019-04-25', end:'2019-04-25', title:'Bike Night', link:'', description:'CFTV.Live is Live every 2nd and 4th Thursday of the Month', where:'Ace Cafe Orlando', time:'7:30pm'},
      {start:'2019-05-09', end:'2019-05-09', title:'Bike Night', link:'', description:'CFTV.Live is LIVE every 2nd and 4th Thursday of the Month', where:'Ace Cafe Orlando', time:'7:30pm'},
      {start:'2019-05-23', end:'2019-05-23', title:'Bike Night', link:'', description:'CFTV.Live is LIVE evey 2nd and 4th Thursday of the Month', where:'Ace Cafe Orlando', time:'7:30pm'}
    ];
    const events = eventMeta.map((data) =>{
      return{
        start:data.start,
        end:data.end,
        eventClasses:'custom-event-class',
        title:data.title,
        description:data.description,
        link:data.link,
        where:data.where,
        time:data.time
      }
    });
    return events;
  },

  getCarEvents:() =>{
    const eventMeta = [
      {start:'2019-05-20', end:'2019-05-20', title:'Porsche Night', link:'', description:'CFTV.Live is LIVE every 3rd Monday of the Month', where:'Ace Cafe Orlando', time:'7:30pm'},
      {start:'2019-06-17', end:'2019-06-17', title:'Porsche Night', link:'', description:'CFTV.Live is LIVE every 3rd Monday of the Month', where:'Ace Cafe Orlando', time:'7:30pm'}
    ];
    const events = eventMeta.map((data) =>{
      return{
        start:data.start,
        end:data.end,
        eventClasses:'custom-event-class',
        title:data.title,
        description:data.description,
        link:data.link,
        time:data.time,
        where:data.where
      }
    });
    return events;
  },

  getSpecialEvents:() =>{
    const eventMeta = [
      {start:'2019-04-26', end:'2019-04-28', title:'Leesburg Bike Fest', link:'https://leesburgbikefest.com', description:'CFTV.Live at Leesburg Bike Fest Live', where:'Downtown Lessburg', time:'All Day'},
      {start:'2019-05-18', end:'2019-05-18', title:'VFW Kissimmee', link:'', description:'CFTV.Live at the VFW Kissimmee Ride', where:'Kissimmee Lake Front', time:'T.B.A'}
    ];
    const events = eventMeta.map((data) =>{
      return{
        start:data.start,
        end:data.end,
        eventClasses:'custom-event-class',
        title:data.title,
        description:data.description,
        link:data.link,
        time:data.time,
        where:data.where
      }
    });
    return events;
  }
}

import React,{Component} from 'react';
import {Button, Modal, Container} from 'react-bootstrap';
const Shows = [
  {link:'https://www.youtube.com/embed/i0yFv7LFP0o', time:'51:01', date:'9-21-2019',location:'Austin Tindal Sports Complex',title:'USO Benefit Ride'},
  {link:'https://www.youtube.com/embed/xWO5FV_tfCM',time:'57:22', title:'Porsche Night', location:'Ace Cafe Orlando', date:'9-16-2019'},
  {link:'https://www.youtube.com/embed/MC8sSeou4XI', time:'1:13:08', title:'Bike Night', location:'Ace Cafe Orlando', date:'9-12-2019'},
  {link:'https://www.youtube.com/embed/QTyqd145cng', time:'59:38', title:'Bike Night', location:'Ace Cafe Orlando', date:'8-22-2019'},
  {link:'https://www.youtube.com/embed/jth8PFapjO8', time:'1:09:03', title:'Porsche Night', location:'Ace Cafe Orlando', date:'8-19-2019'},
  {link:'https://www.youtube.com/embed/Q_jtkffO7-Y', time:'1:08:30', title:'Bike Night', location:'Ace Cafe Orlando', date:'8-8-2019'},
  {link:'https://www.youtube.com/embed/303UdIVsCTU', time:'3:12:20', title:'Orlando Predators @ Jacksonville Sharks', location:'Jacksonville Veterans Memorial Arena', date:'7-27-2019'},
  {link:'https://www.youtube.com/embed/4I4X5mHtTic', time:'1:12:21', location:'Ace Cafe Orlando', title:'Bike Night', date:'7-25-2019'},
  {link:'https://www.youtube.com/embed/rE04Cvzp2po', title:'Orlando Predators Chalk Talk', location:"Cecil's BBQ", time:'37:20',date:'7-22-2019'},
  {link:'https://firebasestorage.googleapis.com/v0/b/cftv-fd2b9.appspot.com/o/OrlandoPredatorsVsColumbusLions.mp4?alt=media&token=82d0ecf8-a4f7-4621-8ffb-571a4c48b717', title:'Columbus Lions @ Orlando Predators', time:'3:23:54',location:'Amway Center',date:'7-20-2019'},
  {link:'https://www.youtube.com/embed/lt_FHsGBZ6o', title:'Porsche Night', location:'Ace Cafe Orlando', date:'7-15-2019', time:'55:56'},
  {link:'https://www.youtube.com/embed/YnNYdeM9JEo', title:'Orlando Predators @ Carolina Cobras', time:'2:52:59', date:'7-13-2019', location:'Greensboro Coliseum'},
  {link:'https://www.youtube.com/embed/QEEQn099aBY', title:'Bike Night', location:'Ace Cafe Orlando', time:'1:00:08',date:'7-11-2019'},
  {link:'https://www.youtube.com/embed/Cf0a0kc4yiQ', title:'Chalk Talk', location:"Cecil's Texas Style BBQ", time:'29:50', date:'7-8-2019'},
  {link:'https://www.youtube.com/embed/qQloIl6c0MA',date:'7-5-2019', title:'Jacksonville Sharks @ Orlando Predators', location:'Amway Center', time:'3:09:28'},
  {link:'https://www.youtube.com/embed/93sbCepJuLQ', date:'6-30-2019', title:'Carolina Cobras @ Orlando Predators', location:'Amway Center', time:'2:50:17'},
  {link:'https://www.youtube.com/embed/PsaymXdDtzM',date:'6-27-2019',title:'Bike Night', location:'Ace Cafe Orlando',time:'56:41'},
  {link:'https://www.youtube.com/embed/lIFFUwGH1HA',date:'6-17-2019', title:'Porsche Night', time:'51:19', location:'Ace Cafe Orlando'},
  {link:'https://www.youtube.com/embed/purW4UWz4QE',title:'Massachusetts Pirates @ Orlando Predators', location:'Amway Center', time:'2:44:01',date:'6-15-2019'},
  {link:'https://www.youtube.com/embed/hBOoZWkjjOk', title:'Bike Night', location:'Ace Cafe Orlando', time:'1:10:26', date:'6-13-2019'},
  {link:'https://firebasestorage.googleapis.com/v0/b/cftv-fd2b9.appspot.com/o/predsjax.mp4?alt=media&token=264fb066-7d0c-499c-9f46-0fcd3bc55acb', date:'5-31-2019', title:'Jacksonville Sharks @ Orlando Predators', location:'Amway Center', time:'3:41:14'},
  {link:'https://www.youtube.com/embed/8t9CHziGB08', date:'5-25-2019', title:'Orlando Predators @ Carolina Cobras', location:'Greensboro Coliseum', time:'3:44:30'},
  {link:'https://www.youtube.com/embed/2eIVHn2KP7Q', date:'5-23-2019', title:'Bike Night', location:'Ace Cafe Orlando', time:'48:48'},
  {link:'https://www.youtube.com/embed/o7K4l8GQqSU', date:'5-20-2019', title:'Porsche Night', location:'Ace Cafe Orlando', time:'54:53'},
  {link:'https://www.youtube.com/embed/V1EQ1URXog4', date:'5-18-2019', title:'Armed Forces Day with Harlequin Part 1', time:'43:38', location:'The Lakefront Park, Kissimmee, FL'},
  {link:'https://www.youtube.com/embed/T1qeuWfpfCk', date:'5-18-2019', title:'Armed Forces Day with Harlequin Part 2', time:'43:54', location:'The Lakefron Park, Kissimmee, FL '},
  {link:'https://www.youtube.com/embed/vOVta83oaLQ', date:'5-18-2019', title:'Orlando Predators @ Jacksonville Sharks', location:'Jacksonville Veterans Memorial Arena', time:'2:50:03'},
  {link:'https://www.youtube.com/embed/SbfquqH95TI', date:'05-12-2019', title:'New York Streets @ Orlando Predators', location:'Amway Center', time:'3:06:14'},
  {link:'https://www.youtube.com/embed/II27XVNJIwc', date:'05-09-2019', title:'Bike Night', location:'Ace Cafe Orlando', time:'57:45'},
  {link:'https://www.youtube.com/embed/l9yIFLtw9Ck', date:'04-25-2019', title:'Bike Night', location:'Ace Cafe Orlando', time:'1:15:01'},
  {link:'https://www.youtube.com/embed/Ofx6dt2myqg', date:'04-15-2019', title:'Porsche Night', location:'Ace Cafe Orlando', time:'53:19'},
  {link:'https://www.youtube.com/embed/-oy_QiYymQc', date:'03-28-2019', title:'Bike Night', location:'Ace Cafe Orlando', time:'1:20:34'},
  {link:'https://www.youtube.com/embed/GyS81ARplKQ', date:'03-18-2019', title:'Porsche Night', location:'Ace Cafe Orlando', time:'54:24'},
  {link:'https://www.youtube.com/embed/u66-QQ8f7YQ', date:'03-14-2019', title:'Bike Night', location:'Ace Cafe Orlando', time:'1:06:49'}
];

class PastEvents extends Component{
  state = {
    showPopover:false,
    showModal:false,
  }
  handleClick = (data) =>{
    this.setState({
      showPopover:false,
      showModal:true,
      overlayTitle:data.title,
      overlayLocation:data.location,
      overlayTime:data.time,
      overlayLink:data.link,
      overlayDate:data.date
    });
  }
  handleModalClose = () =>{
    this.setState({
      showModal:false
    });
  }
  render(){
    const something = Shows.map((data,index) =>{
      return <tr key={index}>
        <td>{data.date}</td>
        <td>{data.title}</td>
        <td>{data.location}</td>
        <td>{data.time}</td>
        <td><Button onClick={() => this.handleClick(data)} className='watchButton'>Watch</Button></td>
      </tr>
    });
    return(
      <div>
        <Modal show={this.state.showModal} onHide={this.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.overlayDate} | {this.state.overlayTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='embed-responsive embed-responsive-21by9'>
              <iframe src={this.state.overlayLink} alow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen title='Live' ></iframe>
            </div>
          </Modal.Body>
        </Modal>
        <Container>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>Date</th>
                <th scope='col'>Title</th>
                <th scope='col'>Location</th>
                <th scope='col'>Time</th>
                <th scope='col'>Watch</th>
              </tr>
            </thead>
            <tbody>
              {something}
            </tbody>
          </table>
        </Container>
      </div>
    )
  }
}

export default PastEvents

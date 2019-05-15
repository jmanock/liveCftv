import React,{Component} from 'react';
import {Button, Modal, Container} from 'react-bootstrap';
const Shows = [
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

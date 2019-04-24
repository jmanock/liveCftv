import React,{Component} from 'react';
import {Row, Button, ButtonGroup, Overlay, Popover, Modal, Container} from 'react-bootstrap';
const Shows = [
  {link:'https://www.youtube.com/watch?v=Ofx6dt2myqg&t=', date:'2019-04-15', title:'Porsche Night', location:'Ace Cafe Orlando', time:'53:19'},
  {link:'https://www.youtube.com/watch?v=-oy_QiYymQc', date:'2019-03-28', title:'Bike Night', location:'Ace Cafe Orlando', time:'1:20:34'},
  {link:'https://www.youtube.com/watch?v=GyS81ARplKQ&t=', date:'2019-03-18', title:'Porsche Night', location:'Ace Cafe Orlando', time:'54:24'},
  {link:'https://www.youtube.com/watch?v=u66-QQ8f7YQ&t=', date:'2019-03-14', title:'Bike Night', location:'Ace Cafe Orlando', time:'1:06:49'}
];

class PastEvents extends Component{
  state = {
    showPopover:false,
    showModal:false,
  }
  handleClick = (x) =>{

    this.setState({
      showPopover:false,
      showModal:true,
      overlayTitle:'',
      overlayLocation:'Something Else'
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
        <td><Button onClick={this.handleClick}>Watch</Button></td>
      </tr>
    });
    return(
      <div>
        <Modal show={this.state.showModal} onHide={this.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.overlayTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.overlayLocation}</Modal.Body>
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

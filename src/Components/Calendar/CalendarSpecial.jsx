import React,{Component} from 'react';
import Events from './Events';
import moment from 'moment';
import Data from './Data';
import {Row, Button, ButtonGroup, Overlay, Popover, Modal, Container} from 'react-bootstrap';

class CalendarSpecial extends Component{
  state = {
    moment:moment(),
    showPopover:false,
    showModal:false,
    overlayTitle:null,
    overlayContent:null,
    popoverTarget:null
  };

  handleNextMonth = () =>{
    this.setState({
      moment:this.state.moment.add(1,'M')
    });
  }

  handlePreviousMonth = () =>{
    this.setState({
      moment:this.state.moment.subtract(1,'M')
    });
  }

  handleToday = () =>{
    this.setState({
      moment:moment()
    });
  }

  handleEventClick = (target, eventData, day) =>{
    this.setState({
      showPopover:false,
      showModal:true,
      overlayTitle:eventData.title,
      overlayContent:eventData.description
    });
  }

  getMomentFromDay(day){
    return moment().set({
      'year':day.year,
      'month':(day.month+0)%12,
      'day':day.day
    });
  }

  handleModalClose = () =>{
    this.setState({
      showModal:false
    });
  }

  getHumanDate(){
    return [moment.months('MM', this.state.moment.month()), this.state.moment.year()].join(' ');
  }

  render(){
    return(
      <div>
        <Overlay show={this.state.showPopover} rootClose onHide={ () =>this.setState({showPopover:false})} placement='top' container={this} target={this.state.popoverTarget}>
          <Popover id='event'>{this.state.overlayTitle}</Popover>
        </Overlay>

        <Modal show={this.state.showModal} onHide={this.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.overlayTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <a href={`${this.state.overlayContent}`} target='_blank' rel='noopener noreferrer'>{this.state.overlayContent}</a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleModalClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Container>
          <Row>
            <ButtonGroup>
              <Button variant='secondary' onClick={this.handlePrevioudMonth}>&lt;</Button>
              <h1 style={{color:'#fc0100'}}>{this.getHumanDate()}</h1>
              <Button variant='secondary' onClick={this.handleNextMonth}>&gt;</Button>
            </ButtonGroup>
            <Events month={this.state.moment.month()} year={this.state.moment.year()} events={Data.getSpecialEvents()} onEventClick={this.handleEventClick} maxEventSlots={10} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default CalendarSpecial;

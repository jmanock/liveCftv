import React,{Component} from 'react';
import {Row, Button, ButtonGroup, Overlay, Popover, Modal, Container} from 'react-bootstrap';

class PastEvents extends Component{
  state = {
    showPopover:false,
    showModal:false,
  }
  render(){
    return(
      <div>
        <Overlay show={this.state.showPopover} rootclose onHide={()=>this.setState({showPopover:false})} placement='top' container={this} target={this.state.popoverTarget}>
          <Popover id='event'>{this.state.overlayTitle}</Popover>
        </Overlay>
      </div>
    )
  }
}

export default PastEvents

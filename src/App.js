import React,{Component} from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import Header from './Components/NavBar/Header';
import Home from './Components/Home';
import About from './Components/About';
import Sponsors from './Components/Sponsors';
import Events from './Components/SpecialEvents';
import Bikes from './Components/Bikes';
import Cars from './Components/Cars';
import Preds from './Components/Preds';
import Footer from './Components/NavBar/Footer';
import './Main.css';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/CarFeverTV' component={Cars} />
          <Route path='/OrlandoPredators' component={Preds} />
          <Route path='/CycleFeverTV' component={Bikes} />
          <Route path='/About' component={About} />
          <Route path='/Events' component={Events} />
          <Route path='/Sponsors' component={Sponsors} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;

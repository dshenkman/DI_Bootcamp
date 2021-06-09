import React from "react"
import './App.css';
import Alerts from './components/Alerts'
import 'bootstrap/dist/css/bootstrap.min.css'

import Alert from 'react-bootstrap/Alert'
// import Alert from 'react-popup-alert'



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: '',
      // show: true
      color: ''

    }
  }




  render() {
    const {text} = this.state;
    return (
      // <Alert text="OMG! Something really bad has happended!" />
      <Alerts color = "blue" text='I am supposed to be green'/>


    );

  }
}


export default App;

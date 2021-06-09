import './App.css';
import React from 'react'
import Child from './components/Child'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      favoriteColor: 'red',
      fav: 'red',
      snap: 'red',
      show: true
    }
  }



  getSnapshotBeforeUpdate(prevProps, prevState) {

    if(prevState.favoriteColor !== this.state.favoriteColor) {

        this.setState({snap: prevState.favoriteColor})

      }

}



  componentDidMount() {
      setTimeout(() => {this.setState({favoriteColor: 'yellow'})}, 5000);

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState.favoriteColor !== this.state.favoriteColor) {

      this.setState({fav: this.state.favoriteColor})
  }
  }



  deleteHeader = () => {
    this.setState ({show: false})
  }

  handleClick = () => {
     this.setState({favoriteColor:'blue'})
     // this.setState({favoriteColor:'pink'})

  }

   shouldComponentUpdate() {
     return true
     // return false;
   }



  render() {
    const {favoriteColor, fav, snap} = this.state;
    let child;
    if (this.state.show) {
      child = <Child />
    }

    return (

      <>
        {child}
        <button onClick = {this.deleteHeader}>Delete Header</button>

        <h1>My favorite color is {favoriteColor}</h1>
        <button onClick ={this.handleClick}>Change Color</button>
        <div>Before the updates, the favorite was {snap}</div>
        <div>The updated favorite is {fav}</div>





      </>


    );

  }


}

export default App;

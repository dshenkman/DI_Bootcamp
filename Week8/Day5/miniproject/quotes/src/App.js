import './App.css';
import Quotes from './components/Quotes'
import quotes from './components/QuotesDatabase'
import React from 'react'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotesList: quotes,
      random: 0

    }
  }

  getRandom = () => {
    return Math.floor(Math.random() * this.state.quotesList.length)
  }

  handleClick = () => {
    // console.log(this.getRandom());
    this.setState({random: this.getRandom()})
  }

  randomColor() {
    const rgb= `rgb(
      ${Math.floor(Math.random() * 155)}
      ${Math.floor(Math.random() * 155)}
      ${Math.floor(Math.random() * 155)}
    )`
    return rgb
  }





  render() {
    const {quotesList, random} = this.state
    const randomColor = this.randomColor();

    console.log(random);

  return (
  <Quotes quotesList={quotesList} random={random} handleClick={this.handleClick} displayColor={randomColor} />
    );
  }

}

export default App;

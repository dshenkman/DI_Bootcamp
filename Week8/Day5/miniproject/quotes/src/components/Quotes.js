import React from 'react'

class Quotes extends React.Component {
    render() {
      const html = document.documentElement;
      html.style.backgroundColor = (this.props.displayColor)
  // const {text} = props



  return (

    <div id="box" style = {{backgroundColor: 'white'}}>

    <div style = {{color: this.props.displayColor}}>

    <h2 >"{this.props.quotesList[this.props.random].quote}"</h2>
    <h1>{this.props.quotesList[this.props.random].author}</h1>

    </div>

    <button style = {{backgroundColor: this.props.displayColor}} onClick ={this.props.handleClick}>Get New Quote</button>


    </div>

  );
 }
}

export default Quotes;

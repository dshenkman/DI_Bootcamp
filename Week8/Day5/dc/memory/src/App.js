import React from 'react'
import './App.css';
import superheroes from './superheroes.json';
import Hero from './components/Hero'
import Nav from './components/Nav'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
      score: 0,
      top_score: 0
    }
  }
  componentDidMount() {
    this.setState({heroes:superheroes.superheroes})
  }

  handleClick = (id) => {
    let {heroes, score, top_score} = this.state;
    const hero = heroes.find(item => {
      return item.id === id
    })
    if(hero.clicked === true) {
      if(score>top_score) {
        this.setState({
          top_score: score
        })


      }
      this.setState({
        score:0,
        heroes: this.reset([...heroes])
      })

    } else {
      hero.clicked = true;
      this.setState({
        score: ++score,
        heroes: this.shuffle([...heroes])
      })
    }

  }

  reset = (array) => {
    for (let i = array.length-1; i > 0; i--) {
      array[i].clicked = false
    }
    return array
  }

  shuffle = (array) => {
    for (var i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() *(i + 1));
      // let t = array[i];
      // array[i] = array[j];
      // array[j] = t;
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array;

  }

  render() {
    const {heroes, score, top_score} = this.state;
    return (
      <>
      <Nav {...this.state} />

      <div className='heroList'>
      {
        heroes.map((item,i) => {
          return <Hero hero={item} handleClick={this.handleClick} key={i} />
        })
      }
      </div>
      </>
    )
  }
}

export default App;

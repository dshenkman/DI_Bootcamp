
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      language: [
        {votes: 0, lang: 'Php'},
      	{votes: 0, lang: 'Python'},
      	{votes: 0, lang: 'JavaScript'},
    		{votes: 0, lang: 'Java'}
      ]
    }
  }

  addNumber = () => {
    let lang = [...this.state.language]
    // console.log(lang);
    // let lang1 = lang[i].votes++;
    for (var i = 0; i < lang.length; i++) {

      let lang1 = lang[i].votes++;

      // console.log(lang1);
    }


    // let lang2 = lang++
    // console.log(lang2);

  }

  handleClick = () => {
    this.setState({votes: this.addNumber()})


  }
  //
  // componentDidMount() {
  //
  // let data = [
	// 			{votes: 0, lang: 'Php'},
	// 			{votes: 0, lang: 'Python'},
	// 			{votes: 0, lang: 'JavaScript'},
	// 			{votes: 0, lang: 'Java'}
	// 		];
  //     this.setState({arr:data})
  //   }


  render() {
    const {language} = this.state;
    console.log({language});
    // const cards = language.map(item => {
    //   return item.vote
    // })
    return (

      <>
        <h1>Vote Your Language!</h1>
      <div className="boxes">
      {

        language.map((lang,i) =>
        <div  className="boxes2">

        <div>{language[i].votes}</div>
        <div>{language[i].lang}</div>
        <button onClick={this.handleClick}>Click Here</button>

        </div>

      )}

      </div>

      </>




    );

  }


}

export default App;

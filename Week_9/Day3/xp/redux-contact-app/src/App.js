import React from 'react'
import {connect} from 'react-redux'

import { contentupdate, addNew, delme } from './actions'

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const {handleChange, handleSubmit, items, input, handleDel} = this.props;
  return (
    <>

    <div>
    <h1> Clientside Contacts Application</h1>
    <h2>Add Contact Form</h2>
      <input id='input' type = 'text' onChange = {handleChange} />
      <button onClick={()=> handleSubmit(document.getElementById('input'))}>ADD</button>
    </div>

    {items.map((item,e) => {
      return (
        <div key={e}>
        <p id={item}> {item} </p>
        <button onClick={handleDel}>Remove</button>
        </div>
      )
    })}
    </>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    input:state.input,
    items:state.items

  }


}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => dispatch(contentupdate(event.target.value)),
    handleSubmit: (content) => dispatch(addNew(content)),
    handleDel: (event) => dispatch(delme(event.target.id))

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

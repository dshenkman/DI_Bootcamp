import React from 'react'

class Child extends React.Component {
  componentWillUnmount() {
    alert('The header is about to be unmounted')
  }
  render () {

  return(
    <>
  <h1> Hello World! </h1>
  </>
)



}
}

export default Child

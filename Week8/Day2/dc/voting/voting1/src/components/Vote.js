import React from 'react'
import Box from './Box'
import './vote.css'


const Vote = (props) => {
  const {boxes} = props;
  console.log({boxes});
  return(
    <div className="tc">
    {
      boxes.map( (item,i) => {
        return <Box data={item} />
      })
    }
    </div>
  )
}

export default Vote;

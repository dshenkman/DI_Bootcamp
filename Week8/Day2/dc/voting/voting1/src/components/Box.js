import React from 'react'

const Box = (props) => {
  const {data} = props;
  console.log(data);
  const {votes, lang} = data;
  return(
      <div>
        <h1>Vote Your Language!</h1>
        <div>{votes}</div>
        <div>{lang}</div>
      </div>
  )
}


export default Box;

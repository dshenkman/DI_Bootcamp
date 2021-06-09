import React from "react"


const Alerts = (props) => {
  const {text} = props;
  // const {show} = props;
  const {color} = props;

  // if(props.show === false){
  //     return null;
  // }
  // else{
  //     return (
  //       <div class="alert alert-danger" role="alert">
  //         {text}
  //       </div>
  //     );
  //
  //
  // }
  const colorClasses = {
      'red': 'alert-danger',
      'orange': 'alert-warning',
      'green': 'alert-success'

  }

  if (props.color === 'red') {
    return (
    <div class="alert alert-danger" role="alert">{text}</div>
);

} else if (props.color === 'orange') {
  return (
  <div class="alert alert-warning" role="alert">{text}</div>
);
} else if (props.color === 'green') {
  return (
  <div class="alert alert-success" role="alert">{text}</div>
);
} else {
  return (
    <alert>The color {color} is not on the list</alert>
  )
}


}

export default Alerts;

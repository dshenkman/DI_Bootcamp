import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';






const BootstrapCard = (props) =>   {

const title="McCartney"

const imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg"

const buttonLabel="Go to Wikipedia"

const buttonUrl="https://en.wikipedia.org/wiki/Paul_McCartney"

const description="Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles."

  return(
    <>
      <div className="card m-5" style={{width: '30rem'}}>
          <img className="card-img-top" src={props.imageUrl} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.buttonUrl}className="btn btn-primary">{props.buttonLabel}</a>
      </div>
  </div>
    </>
  )
}

const Jumbotron = () => {
    const title="Welcome to react"
    const description="React is the most popular rendering library in the world"
    const buttonLabel="Go to the official website"
    const buttonURL="https://reactjs.org/"

return (
<div class="p-5 bg-light">
  <h1 class="mb-3">Title</h1>
  <h4 class="mb-3">Description</h4>
  <a class="btn btn-primary" href="" role="button">Call to action</a>
</div>
)

}

// BootstrapCard.propTypes = {
//     title: PropTypes.string,
//     imageUrl: PropTypes.string,
//     buttonLabel: PropTypes.string,
//     buttonUrl: PropTypes.string,
//     description: PropTypes.string,
//
//
// };

BootstrapCard.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonUrl: PropTypes.string,
    description: PropTypes.string,


};

export default BootstrapCard;

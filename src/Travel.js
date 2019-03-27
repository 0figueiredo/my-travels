import React from "react";

const Travel = ({ picture, destination, country }) => {
  return (
    <article>
      <img src={picture} alt=""/>
      <p>{destination}</p>
      <p>{country}</p>
    </article>
  );
}

export default Travel;
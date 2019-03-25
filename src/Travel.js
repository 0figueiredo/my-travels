import React from "react";

const Travel = ({ quote, image }) => (
  <figure>
    <img src={image} alt={""}/>
    <figcaption>
      <blockquote>{quote}</blockquote>
    </figcaption>
  </figure>
);

export default Travel;
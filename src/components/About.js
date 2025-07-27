import React from "react";

function About(props) {
  const defaultImage = "https://via.placeholder.com/215";
  const displayImage = props.image || defaultImage;

  return (
    <aside>
      <img src={displayImage} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
}

export default About;
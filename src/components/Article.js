import React from "react";

function Article(props) {
  const defaultDate = "January 1, 1970";
  const displayDate = props.date || defaultDate;

  const renderReadingTime = () => {
    const minutes = props.minutes;
    if (typeof minutes !== 'number') return null; // Ensure minutes is a number

    let emoji = "";
    let count = 0;

    if (minutes < 30) {
      emoji = "☕️";
      count = Math.ceil(minutes / 5);
    } else {
      emoji = "🍱";
      count = Math.ceil(minutes / 10);
    }

    return (
      <small>
        {emoji.repeat(count)} {minutes} min read
      </small>
    );
  };

  return (
    <article>
      <h3>{props.title}</h3>
      <small>{displayDate}</small>
      {renderReadingTime()}
      <p>{props.preview}</p>
    </article>
  );
}

export default Article;

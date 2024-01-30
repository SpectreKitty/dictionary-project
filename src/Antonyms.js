import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div className="Antonyms">
        <strong>Antonyms:</strong>
        {props.antonyms.slice(0, 3).map(function (antonym, index) {
          return (
            <ul key={index}>
              <li>{antonym}</li>{" "}
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

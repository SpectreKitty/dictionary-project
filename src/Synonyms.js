import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong> Synonyms:</strong>
        {props.synonyms.slice(0, 3).map(function (synonym, index) {
          return (
            <ul key={index}>
              <li>{synonym}</li>{" "}
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

import React from "react";

export default function Examples(props) {
  if (props.example) {
    return (
      <div className="Examples">
        <p>
          <strong>Example: </strong>
          <em>{props.example}</em>
          {props.phonetic}
        </p>
      </div>
    );
  } else {
    return null;
  }
}

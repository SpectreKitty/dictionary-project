import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row gy-2">
          {props.photos.map(function (photo, index) {
            return (
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <div className="col-4">
                  <img
                    src={photo.src.landscape}
                    key={index}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </a>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

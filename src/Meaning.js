import React from "react";
import Synonyms from "./Synonyms.js";
import Examples from "./Examples.js";
import Antonyms from "./Antonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>
          <strong>Definition: </strong>
          {props.meaning.definition}
        </p>
        <Examples example={props.meaning.example} />
        <Synonyms synonyms={props.meaning.synonyms} />
        <Antonyms antonyms={props.meaning.antonyms} />
      </section>
    </div>
  );
}

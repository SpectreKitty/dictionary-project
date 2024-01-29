import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}...`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div ClassName="Dictionary">
      <form className="text-center" onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import Results from "./Results";

const synth = window.speechSynthesis;

const App = () => {
  console.log(synth.getVoices());
  return (
    <div className="container">
      <h1>English Dictonary</h1>

      <form>
        <div className="row">
          <textarea cols="30" rows="4" placeholder="Enter Text" />

          <div className="voices-icons">
            <div className="select-voices">
              <select>
                <option value="">English</option>
                <option value="">English</option>
                <option value="">English</option>
              </select>
            </div>
            <i className="fa-solid fa-volume-high" />
          </div>
        </div>
      </form>
      <Results />
    </div>
  );
};

export default App;

import React from "react";
import "./Searchform.css";

export default class Searchform extends React.Component {
  render = () => {
    return (
      <form id="city-name" className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Enter a city"
              autocomplete="off"
              autofocus="on"
              id="actual-city"
            />
            <input type="submit" value="Search" />
            <input type="button" id="current" value="Current" />
          </div>
        </div>
      </form>
    );
  };
}

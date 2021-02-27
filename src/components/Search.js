import React from 'react';
import '../styles/Search.css'



function Search(props) {
  return (
    <form className = "form-inline">
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employee"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-info">
          Search
        </button>
        <button onClick={props.refreshPage} className="btn btn-info">
          Refresh
        </button>
        <button onClick={props.clearSearch} className="btn btn-info">
          Clear Search
        </button>
      </div>
    </form>
  );
}

export default Search;
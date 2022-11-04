// CORE
import { useState } from "react";

function Search({ callbackSearch = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    callbackSearch(value);
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field">
            <i className="material-icons prefix">search</i>
            <input
              id="icon_prefix"
              type="search"
              className="validate"
              onChange={(event) => setValue(event.target.value)}
              value={value}
            />
            <label htmlFor="icon_prefix">Search...</label>
            <button className="btn btn_search">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;

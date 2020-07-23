import React from "react";

const Search = ({ plachoder, handelChange }) => {
  return (
    <div className="input-group flex-nowrap mx-auto" style={{ width: "400px" }}>
      <div className="input-group-prepend">
        <span className="input-group-text" id="addon-wrapping">
          search
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder={plachoder}
        aria-label="monaster namee"
        aria-describedby="addon-wrapping"
        onChange={handelChange}
      />
    </div>
  );
};

export default Search;

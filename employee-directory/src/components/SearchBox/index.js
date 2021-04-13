import React from "react";
import "./SearchBox.css";

function SearchBox() {
    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Employee Name"
                    aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
}
export default SearchBox;
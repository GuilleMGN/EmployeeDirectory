import React from "react";
import "./SearchBox.css";

function SearchBox({handleSearchChange, handleSubmitForm}) {
    return (
        <div className="searchbox">
            <form className="form-inline justify-content-center" onSubmit={ handleSubmitForm } >
                <input
                    className="form-control"
                    type="search"
                    placeholder="Employee Name"
                    aria-label="Search"
                    onChange={ e => handleSearchChange(e) }
                />
                <button className="btn btn-outline-primary" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
}
export default SearchBox;
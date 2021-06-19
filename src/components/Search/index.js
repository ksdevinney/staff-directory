// search by name...
import React from 'react';

function Search(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search by name"
                    id="search"
                />
                <button onClick={props.handleFormSubmit} className="btn">
                    Search
                </button>
            </div>
        </form>
    );
};

export default Search;
import React from 'react';

function SortButton(props) {
    return (
        <button type="button" className="sort-button btn btn-info btn-outline-dark"
            onClick={(event) => props.handleSort(event)}
            value={props.sorted}
        >
            Sort
        </button>
    )
}

export default SortButton;
import React from 'react';

function SortButton(props) {
    return (
        <button type="button" className="btn btn-danger"
            onClick={(event) => props.handleSort(event)}
        >
            Sort
        </button>
    )
}

export default SortButton;
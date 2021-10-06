import React from 'react';

function SortButton(props) {
    return (
        <button type="button" className="btn btn-info"
            onClick={(event) => props.handleSort(event)}
            value={props.sorted}
        >
            Sort
        </button>
    )
}

export default SortButton;
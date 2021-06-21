import React from 'react'

function Search (props) {
    return(
        <div>
            <input onChange={(event) => props.handleSearch(event)} placeholder='Search' value={props.searchString} />
        </div>
    )
}

export default Search
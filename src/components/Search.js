import React from 'react'

function Search (props) {
    return(
        <div className='form-floating mb-3'>
            <input onChange={(event) => props.handleSearch(event)} placeholder='Search' value={props.searchString} />
        </div>
    )
}

export default Search
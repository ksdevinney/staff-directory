// just first and last name for list of employees
import React from "react";

function List(props) {
    return (
        <ul className="list-group">
            {props.results.map(result => (
                <li className="list-group-item" key={result.id} />
            ))};
        </ul>
    );
};

export default List;
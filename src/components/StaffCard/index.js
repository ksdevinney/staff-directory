// to have biographical info
import React from "react";

function StaffCard(props) {
    return (
      <div className="card">
        {/* <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div> */}
        <div className="content">
            {/* List needed info */}
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Occupation:</strong> {props.occupation}
            </li>
            <li>
              <strong>Location:</strong> {props.location}
            </li>
            <li>
              <strong>Phone:</strong> {props.phone}
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default StaffCard;
  
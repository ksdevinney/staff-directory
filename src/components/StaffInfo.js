import React from 'react';
import StaffCard from './StaffCard';

function StaffInfo(props) {
    return (
        <div className='container'>
            {/* basic table */}
            <table className="table table-hover table-bordered border-info table-striped">
                <thead>
                <tr className="info">
                    <th data-column="name"
                        onClick={ (event) => {
                            console.log(event.target);
                        }}>
                            Name</th>
                    <th data-column="location">Location</th>
                    <th data-column="email">Email</th>
                    <th data-column="phone">Phone</th>
                </tr>
                </thead>
                <tbody id="myTable">
                {props.employeeData.map((employee, key) => 
                <StaffCard name={employee.name} location={employee.city} email={employee.email} phone={employee.phone} key={key} /> )} 
                </tbody>
            </table>
        </div>
    )
}

export default StaffInfo
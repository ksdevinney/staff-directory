import React from 'react';
import StaffCard from './StaffCard'

function StaffInfo(props) {
    return (
        <div className='container'>
            {/* basic table */}
            <table className="table table-hover table-bordered border-danger">
                <thead>
                <tr className="info">
                    <th data-column="name" data-order="desc">Name 🔻</th>
                    <th data-column="city" data-order="desc">City 🔻</th>
                    <th data-column="email" data-order="desc">Email 🔻</th>
                    <th data-column="phone" data-order="desc">Phone 🔻</th>
                </tr>
                </thead>
                <tbody id="myTable">
                {props.employeeData.map((employee, key) => 
                <StaffCard name={employee.name} city={employee.city} email={employee.email} phone={employee.phone} key={key} /> )} 
                </tbody>
            </table>
        </div>
    )
}

export default StaffInfo
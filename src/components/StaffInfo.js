import React from 'react';
import StaffCard from './StaffCard'

function StaffInfo(props) {
    return (
        <div className='container'>
            {/* basic table */}
            <table className="table table-hover table-striped table-bordered border-danger">
                <thead>
                <tr className="info">
                    <th data-column="name" data-order="asc"
                        onClick={ () => {
                            console.log('click');
                        }}
                        >Name 🔻</th>
                    <th data-column="city">City</th>
                    <th data-column="email">Email</th>
                    <th data-column="phone">Phone</th>
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
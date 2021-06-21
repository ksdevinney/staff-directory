import React from 'react';
import StaffCard from './StaffCard'

function StaffInfo() {
    return(
        // basic table
        <table className="table table-hover table-bordered border-danger">
        <tr className="info">
            <th data-column="name" data-order="desc">Name 🔻</th>
            {/* <th data-column="city" data-order="desc">City 🔻</th> */}
            <th data-column="email" data-order="desc">Email 🔻</th>
            <th data-column="phone" data-order="desc">Phone 🔻</th>
        </tr>
        <tbody id="myTable">
            
        </tbody>
    </table>
    )
}

export default StaffInfo
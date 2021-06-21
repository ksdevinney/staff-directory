import React from 'react';

function StaffInfo() {
    return(
        <table className="table table-hover table-bordered border-danger">
        <tr className="info">
            <th data-column="name" data-order="desc">Name &#9650</th>
            <th data-column="city" data-order="desc">City &#9650</th>
            <th data-column="email" data-order="desc">Email &#9650</th>
            <th data-column="phone" data-order="desc">Phone &#9650</th>
        </tr>
        <tbody id="myTable">

        </tbody>
    </table>
    )
}

export default StaffInfo
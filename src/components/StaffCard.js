import React from 'react';

function StaffCard({ name, location, email, phone }) {
    // data for each employee
    return (
        <tr>
            <td>{name} </td>
            <td>{location} </td>
            <td>{email}</td>
            <td>{phone}</td>
        </tr>
    )
}

export default StaffCard
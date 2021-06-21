import React from 'react';

function StaffCard({ name, city, email, phone }) {
    // data for each employee
    return (
        <tr>
            <td>{name} </td>
            <td>{city} </td>
            <td>{email}</td>
            <td>{phone}</td>
        </tr>
    )
}

export default StaffCard
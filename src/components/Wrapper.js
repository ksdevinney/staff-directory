import React from 'react';
import StaffInfo from './StaffInfo';
import axios from 'axios';

class Wrapper extends React.Component{
    state= {
        employeeData: []
    }
    componentDidMount= () => {
        axios.get('https://randomuser.me/api/?results=15')
        .then(apiData => {
            console.log(apiData)
            let apiResults = apiData.data.results
            let employeeData = []
            for (let i=0; i<apiResults.length; i++) {
                employeeData.push({ 
                    name:apiResults[i].name.title + ' ' + apiResults[i].name.first + ' ' + apiResults[i].name.last,
                    city:apiResults[i].location.city,
                    email:apiResults[i].email,
                    phone:apiResults[i].phone
                })
            }
            this.setState({employeeData:employeeData})
        })
    }
    // holds things
    render(){
    return(
        <div className='StaffList'>
            <StaffInfo employeeData={this.state.employeeData} />
        </div>
    )
    }
}

export default Wrapper
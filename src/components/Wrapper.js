import React from 'react';
import StaffInfo from './StaffInfo';
import axios from 'axios';
import Search from './Search';

class Wrapper extends React.Component{
    state= {
        employeeData: [],
        employeeSearch: '',
        employeeDatabase: []
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
            this.setState({employeeData:employeeData, employeeDatabase:employeeData})
        })
    }

    handleSearch = (event) => {
        event.preventDefault()
        let userSearch = event.target.value
        if (userSearch === '' ) {
            this.setState ({employeeData:this.state.employeeDatabase})
        } else {
        let employeeData = this.state.employeeData
        let searchRecord = []
        for (let i=0; i<employeeData.length; i++) {
            if (employeeData[i].name.toLocaleLowerCase().indexOf(userSearch.toLocaleLowerCase()) > -1) {
                searchRecord.push(employeeData[i])
            }
        } 
        console.log(searchRecord)
        this.setState({employeeSearch:userSearch, employeeData:searchRecord})
        }
    }
    // holds things
    render(){
    return(
        <div className='StaffList'>
            <Search searchString={this.state.userSearch} handleSearch={this.handleSearch} />
            <StaffInfo employeeData={this.state.employeeData} />
        </div>
    )
    }
}

export default Wrapper
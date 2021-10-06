import React from 'react';
import StaffInfo from './StaffInfo';
import axios from 'axios';
import Search from './Search';
import SortButton from './SortButton';

class Wrapper extends React.Component{
    state = {
        employeeData: [],
        employeeSearch: '',
        employeeDatabase: [],
        sorted: false
    }
    // call random people from API
    componentDidMount = () => {
        axios.get('https://randomuser.me/api/?results=50&nat=us')
        .then(apiData => {
            let apiResults = apiData.data.results;
            let employeeData = [];
            for (let i = 0; i < apiResults.length; i++) {
                // push to array in state
                employeeData.push({ 
                    name: apiResults[i].name.first + ' ' + apiResults[i].name.last,
                    city: apiResults[i].location.city + ', ' + apiResults[i].location.state,
                    email: apiResults[i].email,
                    phone: apiResults[i].phone
                })
            }
            this.setState({ employeeData: employeeData, employeeDatabase: employeeData })
        })
    }
    // search by name
    handleSearch = (event) => {
        event.preventDefault()
        let userSearch = event.target.value
        if (userSearch === '' ) {
            this.setState ({ employeeData: this.state.employeeDatabase })
        } else {
        let employeeData = this.state.employeeData;
        let searchRecord = []
        for (let i=0; i<employeeData.length; i++) {
            // make search non-case sensitive
            if ((employeeData[i].name.toLocaleLowerCase().indexOf(userSearch.toLocaleLowerCase()) > -1 )) {
                searchRecord.push(employeeData[i])
            }
        } 
        console.log(searchRecord)
        this.setState({ employeeSearch: userSearch, employeeData: searchRecord })
        }
    }
    // sort goes here 
    handleSort = () => {
        let employeeData = this.state.employeeData;
        let sorted = false;
        // logic for ascending sort
        let employeesToSort = employeeData.sort(
            function(a, b) {
            if (a.name < b.name && sorted) {
                return -1;
            } else if (a.name > b.name && !sorted) {
                sorted = true;
                return 1;
            } else {
                return 0;
            }
            // descending sort????
        }
        );
        this.setState({ employeeData: employeesToSort });
    }

    // holds things
    render(){
    return(
        <div className='StaffList'>
            <SortButton
                onClick={this.handleSort}
                handleSort={this.handleSort}
                employeesToSort={this.handleSort} 
            /> 
            <Search 
                searchString={this.state.userSearch} 
                handleSearch={this.handleSearch} 
            />
            <StaffInfo 
                employeeData={this.state.employeeData} 
                employeesToSort={this.handleSort} 
            />
        </div>
    )
    }
}

export default Wrapper
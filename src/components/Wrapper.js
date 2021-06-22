import React from 'react';
import StaffInfo from './StaffInfo';
import axios from 'axios';
import Search from './Search';

class Wrapper extends React.Component{
    state= {
        employeeData: [],
        employeeSearch: '',
        employeeDatabase: [],
        order: 'asc',
        orderName: 'ascending'
    }
    // call random people from API
    componentDidMount= () => {
        axios.get('https://randomuser.me/api/?results=20')
        .then(apiData => {
            console.log(apiData)
            let apiResults = apiData.data.results
            let employeeData = []
            for (let i=0; i<apiResults.length; i++) {
                // push to array in state
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
    // search by name
    handleSearch = (event) => {
        event.preventDefault()
        let userSearch = event.target.value
        if (userSearch === '' ) {
            this.setState ({employeeData:this.state.employeeDatabase})
        } else {
        let employeeData = this.state.employeeData
        let searchRecord = []
        for (let i=0; i<employeeData.length; i++) {
            // make search non-case sensitive
            if ((employeeData[i].name.toLocaleLowerCase().indexOf(userSearch.toLocaleLowerCase()) > -1 )) {
                searchRecord.push(employeeData[i])
            }
        } 
        console.log(searchRecord)
        this.setState({employeeSearch:userSearch, employeeData:searchRecord})
        }
    }
    // sort goes here 
    sortfunction = (column) => {
        console.log(column);
        if (column === 'name') {
            const data = this.state.results;
            this.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                } else {
                    return 0;
                }
            });
            this.setState({
                results: data,
            })
        }
    }
    // handleSort = (column) => {
    //     return function(a, b) {
    //         if (a[column] > b[column] || a.name[column] > b.name[column]) return 1;
    //         else if (a[column] < b[column] || a.name[column] < b.name[column]) return -1;
    //         return 0;
    //     };
    // };

    // setAsc = (event) => {
    //     this.setState({ order: 'asc', orderName: event.innerText.toLocaleLowerCase() })
    // };

    // setDsc = (event) => {
    //     this.setState({ order: 'dsc', orderName: event.innerText.toLocaleLowerCase() })
    // };

    // holds things
    render(){
    return(
        <div className='StaffList'>
            <Search searchString={this.state.userSearch} handleSearch={this.handleSearch} />
            <StaffInfo employeeData={this.state.employeeData} ascending={this.sortfunction} />
        </div>
    )
    }
}

export default Wrapper
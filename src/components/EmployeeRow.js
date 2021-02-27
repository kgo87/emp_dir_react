import React, { Component } from 'react';
import API from '../utils/API';
import Col from './Col';
import Card from './Card';
import Search from './Search';




class EmployeeRow extends Component {
  state = {
    employees: [],
    filteredList: [],
    search: '',
    sort: ''
  };


  componentDidMount() {
    this.empSearch();
  }

  empSearch = (query) => {
    API.search(query)
      .then((res) => {
        console.log(res);
        let all_emp = res.data.results.map((person, index) => ({
          firstName: person.name.first,
          lastName: person.name.last,
          picture: person.picture.medium,
          email: person.email,
          phone: person.phone,
          country: person.location.country,
          key: index,
        }));
        this.setState({
          employees: [...all_emp],
          filteredList: [...all_emp]
        });
      })
      .catch((err) => console.log(err));
  };

  nameSearch = (name) => {
    const filteredList = this.state.employees.filter((employee) => {
      let result = Object.values(employee).join('').toLowerCase();
      return result.indexOf(name.toLowerCase()) !== -1;
    });
    this.setState({ filteredList: filteredList });
  };


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  clearSearch = event => {
    event.preventDefault();
    this.setState({
      filteredList: this.state.employees
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    this.nameSearch(this.state.search);
  };



  handleSort(event, sortKey){
    const data = this.state.filteredList;
    if(this.state.sort === 'asc') {
      data.sort((a,b) => b[sortKey].localeCompare(a[sortKey]));
      this.setState({data});
      this.setState({
        sort: 'desc'
      },() => console.log(this.state.sort));

    } else {
      data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]));
      this.setState({data});
      this.setState ({
        sort: 'asc'
      }, () => console.log(this.state.sort));

    }
    console.log('button clicked');
  }





  render() {
    console.log(this.state);
    return (
      <div className="body">
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          clearSearch = {this.clearSearch}
        />
        <div className="row">
          <Col size="md-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th> <button type = "button" className="btn btn-info" onClick={e => this.handleSort(e, 'firstName')}>
                    First Name</button></th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Country</th>
                </tr>
              </thead>
              {[...this.state.filteredList].map((item) => (
                <Card
                  picture={item.picture}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  email={item.email}
                  phone={item.phone}
                  country={item.country}
                  key={item.key}
                />
              ))}
            </table>
          </Col>
        </div>
      </div>
    );
  }
}

export default EmployeeRow;
import React, { Component } from "react";
import "./Main.css";
import Wrapper from "../Wrapper";
import SearchBox from "../SearchBox";
import Table from "../Table";
import API from "../../utils/API";

class Main extends Component {

    state = {
        users: [],
        filteredUsers: [],
        order: "asc"
    }
    componentDidMount() {
        API.getUsers()
            .then(res => {
                console.log(res);
                this.setState({
                    users: res.data.results,
                    filteredUsers: res.data.results
                })
            })
    }
    handleSearchChange = (e) => {
        console.log(e.target.value);
        const search = e.target.value;
        const results = this.state.users.filter(user => {
            const userArr = Object.values(user).join("").toLowerCase();
            return userArr.indexOf(search.toLowerCase()) !== -1;
        });
        console.log(results);
        this.setState({
            filteredUsers: results
        })
    }
    sortBy = (key, primary = 0, secondary = 0) => {
        let sortedUsers = this.state.filteredUsers;
        if (this.state.order[key]) {
          this.setState({
            filteredUsers: sortedUsers.reverse(),
            order: {
              ...this.order,
              [key]: this.state.order[key] === "asc" ? "desc" : "asc",
            },
          });
        } else {
          sortedUsers = this.state.filteredUsers.sort((a, b) => {
            a = a[key];
            b = b[key];
            if (primary) {
              if (secondary && a[primary] === b[primary]) {
                return a[secondary].localeCompare(b[secondary]);
              }
              return a[primary].localeCompare(b[primary]);
            } else {
              return a.localeCompare(b);
            }
          });
    
          this.setState({
            filteredUsers: sortedUsers,
            order: {
              ...this.order,
              [key]: "asc",
            },
          });
        }
      };

    render() {
        return (
            <Wrapper>
                <SearchBox handleSearchChange={this.handleSearchChange} />
                <Table users={this.state.filteredUsers} sortBy={this.sortBy}/>
            </Wrapper>

        )
    }
}

export default Main;
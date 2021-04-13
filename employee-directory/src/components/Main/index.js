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
        order: "ascend"
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
    
    render() {
        return (
            <Wrapper>
                <SearchBox handleSearchChange={this.handleSearchChange}/>
                <Table users={this.state.filteredUsers} />
            </Wrapper>

        )
    }
}

export default Main;
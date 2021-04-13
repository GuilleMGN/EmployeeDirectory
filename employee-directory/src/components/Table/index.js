import React from "react";
import "./Table.css";
import API from "../../utils/API";
    // function sortName() {

    // }

    // function sortAge() {

    // }


    function componentDidMount() {
        API.getUsers()
            .then(res => res.json())
            .then(json => json.results)
            .then(results => this.setState({ "results": results }))
    }

function Table({ results }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {/* {(results.length > 0) ? results.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td>{data.picture.medium}</td>
                            <td>{data.name.first} {data.name.last}</td>
                            <td>{data.cell}</td>
                            <td>{data.email}</td>
                            <td>{data.age}</td>
                        </tr>
                    )
                }) : <tr><td colSpan="5">Loading...</td></tr>} */}
            </tbody>
        </table>
    );
}

export default Table;
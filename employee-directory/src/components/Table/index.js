import React from "react";
import "./Table.css";


function Table(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name {props.order === "ascend" ? "^" : "v" }</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {(props.users.length > 0) ? props.users.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td><img src={data.picture.medium} alt={data.name.first}/></td>
                            <td>{data.name.first} {data.name.last}</td>
                            <td>{data.cell}</td>
                            <td>{data.email}</td>
                            <td>{data.dob.age}</td>
                        </tr>
                    )
                }) : <tr><td colSpan="5">Loading...</td></tr>}
            </tbody>
        </table>
    );
}

export default Table;
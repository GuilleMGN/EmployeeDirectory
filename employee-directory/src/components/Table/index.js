import React from "react";
import "./Table.css";


function Table(props) {
    return (
        <table className="table table-striped table-hover table-condensed table-sortable">
            <thead>
                <tr>
                    <th>Image</th>
                    <th data-field="name" data-sortable="true">Name <span> </span>
                        <button onClick={() => props.sortBy("name", "first", "last")}
                            className="btn-outline-secondary"> ⇅
                        </button>
                    </th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th data-field="age" data-sortable="true">Age <span> </span>
                        <button onClick={() => props.sortBy("dob", "date", "age")}
                            className="btn-outline-secondary"> ⇅
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {(props.users.length > 0) ? props.users.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td><img src={data.picture.medium} alt={data.name.first} /></td>
                            <td>{data.name.first} {data.name.last}</td>
                            <td>{data.cell}</td>
                            <td>{data.email}</td>
                            <td>{data.dob.age}</td>
                        </tr>
                    )
                }) : <tr><td colSpan="5">No results found. </td></tr>}
            </tbody>
        </table>
    );
}

export default Table;
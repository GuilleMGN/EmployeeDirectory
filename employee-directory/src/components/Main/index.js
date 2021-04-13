import React from "react";
import "./Main.css";
import Wrapper from "../Wrapper";
import SearchBox from "../SearchBox";
import Table from "../Table";
// import API from "../../utils/API";

function Main() {
    return (
        <Wrapper>
            <SearchBox />
            <Table />
        </Wrapper>

    );
}

export default Main;
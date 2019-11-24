import React from 'react';
import GoogleAuth from "./GoogleAuth";
import SearchComponent from "./SearchComponent";

const NavBar = () =>{
    return(
        <div className="ui secondary  menu">
            <div className="menu" style={{margin:'0 auto'}}>
                <div className="item">
                    <SearchComponent/>
                </div>
            </div>

            <div className="menu">
                <div className="item">
                    <GoogleAuth/>
                </div>

            </div>
        </div>
    );
}

export default NavBar;


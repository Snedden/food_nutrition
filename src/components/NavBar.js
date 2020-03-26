import React from 'react';
import GoogleAuth from "./GoogleAuth";
import SearchComponent from "./SearchComponent";
import history from "../history";

const link = {
    cursor:'pointer',
    color: 'fireBrick'
};




const NavBar = () =>{
    return(
        <div className="ui secondary  menu" >
            <a className='menu'  onClick = {() => {
                history.push({
                    pathname:'/',
                });
            }}>
                <h2 className="ui header item" style={link} >
                    <i className="braille icon"></i>
                    <div className="content">
                        Reciply
                    </div>
                </h2>
            </a>
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


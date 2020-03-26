import React, { useState } from 'react';
import {Menu} from "semantic-ui-react";
import { connect } from 'react-redux';

import {signOut} from '../actions'
import history from "../history";

const UserMenu = ({googleAuth})=>{
    const [activeItem, setActiveItem] = useState('account')


    const handleItemClick = ()=> (e, { name }) => setActiveItem(name)
    return(
        <Menu secondary vertical>
            <Menu.Item link
                name='Liked recipes'
                onClick = {() => {
                    history.push({
                        pathname:'/likedRecipes',
                    });
                }}
            />
            <Menu.Item link
                name='sign out'
               onClick = {() => googleAuth.signOut()}
            />
        </Menu>
    )
}

const mapStateToProps = (state) =>{
    return {googleAuth: state.auth.googleAuth}
}


export default connect(mapStateToProps, {signOut}) (UserMenu)
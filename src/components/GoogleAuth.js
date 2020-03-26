import React  from 'react';
import {connect} from 'react-redux';
import { Popup,Menu } from 'semantic-ui-react'

import {signIn,signOut, setGoogleAuth} from "../actions";
import UserMenu from "./UserMenu";

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'123400916522-jn3s0h8ft8ib7hln9cbijrjf0o1g9ag5.apps.googleusercontent.com',
                scope: 'email',
                prompt: 'select_account'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.props.setGoogleAuth(this.auth);
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            const token = this.auth.currentUser.get().getAuthResponse().id_token
            console.log(token);
            this.props.signIn(token);
        }else{
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.props.user) {
            return (
                /*<button onClick={this.onSignOutClick} className='ui red google button'>
                    <i className='google icon'/>
                    Sign Out
                </button>*/
                <Popup trigger={<div style={{cursor:"pointer"}}>
                                    <img
                                        style={{borderRadius:"50%", height:"3em"}}
                                        src={this.props.user.profilePicture}
                                    />

                                </div>}
                   on='click'
                   pinned
                   position='bottom left'
                   >
                    <UserMenu/>
                </Popup>


            )
        }else{
            return (
                <button onClick={this.onSignInClick} className='ui red google button'>
                    <i className='google icon'/>
                    Sign In
                </button>
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) =>{
    return {user: state.auth.user}
}

export default connect(
    mapStateToProps,
    {
        signIn,
        signOut,
        setGoogleAuth
    }
)(GoogleAuth);
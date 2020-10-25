import React from 'react'
import {Button} from "@material-ui/core"
import "./Login.css"
import {auth,provider} from './firebase'
import { useStateValue } from './StateProvider'
import {actionTypes} from './reducer'

function Login() {
    const [{}, dispatch]= useStateValue();
   
    function signIn() {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result.user)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            }).catch((error) => alert(error.message))
    }

  return (
    <div className="login">
    <div className="login__container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
    alt="" />
    <div className="login__text">
    <h1>Sign in to whatsup</h1>
    </div>
    <Button onClick={signIn}>
    Sign In with Google
    </Button>

    </div>
    </div>
  );
}

export default Login;

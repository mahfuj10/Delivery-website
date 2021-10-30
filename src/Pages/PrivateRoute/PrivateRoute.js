import React, { useContext, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../UseAuth';
import { userContext } from '../Login/Login';

const PrivateRoute = ({children, ...rest}) => {


const { user, isLoading } = UseAuth();
if(isLoading){
    return <Spinner style={{margin:"40%"}} animation="border" variant="primary" />
}

console.log(user);

return (

        <Route
        
        {...rest}
        render={({location}) => user?.email ? (children) : (
        <Redirect to={{pathname:"/login", state: {from:location},}}>

        </Redirect>
        )
        }
        ></Route>
    );
};

export default PrivateRoute;

    // const [ signUser, setSingUser ] = useContext(userContext);

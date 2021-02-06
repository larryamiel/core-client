import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../Auth';

export const AuthRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest}
            render={props => {
                if ( Auth.user() ) {
                    return <Component {...props} />
                }
                else {
                    return <Redirect to={{
                        pathname: '/',
                        state: {
                            from: props.location
                        }
                    }} />
                }
            }} />
    );
}
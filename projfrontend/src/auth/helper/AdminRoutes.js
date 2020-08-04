import React from "react"
import {Route, Redirect} from "react-router-dom";
import {isAuthenticated} from "./index";


const AdminRoute = ({ component: Component, ...rest }) => {
    return(
        <Route
          {...rest}
          render={props => 
           isAuthenticated() && isAuthenticated().user.role === 1 ? (
                <Component {...props} /> //this syntax is getting used so that we can pass path in <AdminRoute /> as in <Route/>
            ) : (
                <Redirect to ={{
                    pathname: "/signin",
                    state: {from : props.location}
                }}
                />
            )
        }
        />
    )
}

export default AdminRoute;

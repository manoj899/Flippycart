import React, {Fragment} from 'react'
import {Link, withRouter} from "react-router-dom"
import {signout, isAuthenticated } from "../auth/helper"

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "#2ecc72" };
    } else {
      return { color: "#FFFFFF" };
    }
  };

const Menu = ({history}) => {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand animate__animated animate__tada animate__slow	2s animate__infinite	infinite" href="#">FlippyCart</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li className="nav-item">
                    <Link style={currentTab(history, "/")} className="nav-link" to="/">
                    <i class="fa fa-home" aria-hidden="true"></i>  Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history,"/mindmapping")} className="nav-link" to="/mindmapping">
                    <i class="fa fa-anchor" aria-hidden="true"></i> Project Mindmapping
                    </Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/cart")} className="nav-link" to="/cart">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart
                    </Link>
                </li>
                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li className="nav-item">
                    <Link style={currentTab(history, "/user/darshboard")} className="nav-link" to="/user/dashboard">
                    <i class="fa fa-tachometer" aria-hidden="true"></i> User. DashBoard
                    </Link>
                </li>
                )}
                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <li className="nav-item">
                    <Link style={currentTab(history, "/admin/dashboard")} className="nav-link" to="/admin/dashboard">
                    <i class="fa fa-tachometer" aria-hidden="true"></i> Ad. DashBoard
                    </Link>
                </li>
                )}
                {!isAuthenticated() && (
                    <Fragment>
                    <li className="nav-item">
                        <Link style={currentTab(history, "/signup")} className="nav-link" to="/signup">
                        <i class="fa fa-user-plus" aria-hidden="true"></i>  SignUp
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history, "/Signin")} className="nav-link" to="/signin">
                        <i class="fa fa-sign-in" aria-hidden="true"></i>   SignIn
                        </Link>
                    </li>
                    </Fragment>
                ) }
                {isAuthenticated() && (
                    <li className="nav-item">
                     <span className=" nav-link text-warning" 
                      onClick={() => {
                          signout(() => {
                          history.push("/")
                          })
                      }}>Signout</span>
                </li>
                        )} 
            </ul>
            </div>
            </nav>
        </div>
        
    )
}

export default withRouter(Menu);

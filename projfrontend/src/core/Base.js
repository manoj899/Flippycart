import React from 'react'
import Menu from "./Menu"
import Footer from './footer'

const Base = ({
    title="My Title",
    description="My descripiton",
    className="bg-dark text-white p-4",
    children
}) => {
    return (
    <div>
        <Menu></Menu>
            <div className="container-fluid">
                <div className="jumbotron text-white text-center">
                    <h2 className="display-4 animate__animated animate__fadeIn animate__slow">{title}</h2>
                    <p   className="animate__animated animate__fadeInRight lead ">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
        <div>
            <Footer/>
        </div>
    </div>
    )
}

export default Base;

// this file contain all those component that gonna reside at every page..
// Footer, header etc



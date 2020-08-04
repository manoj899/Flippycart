import React from "react"

const Footer = () =>(
   
    <footer className="footer text-center">
            <div className="container">
                <div className="row mt-4">
                  
                    <div className="col-lg-4 mb-5 mb-lg-0 text-white mt-5">
                        <h4 className="text-uppercase mb-4 text-white ">Location</h4>
                        <p className="lead mb-0text-white ">Wakanda Forever<br />Clark, MO 65243</p>
                    </div>
             
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4 text-white mt-5">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a><a className="btn btn-outline-light btn-social mx-1" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a><a className="btn btn-outline-light btn-social mx-1" href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4 text-white mt-5">About Freelancer</h4>
                          </div>
                </div>
            </div>
        </footer>
)

export default Footer
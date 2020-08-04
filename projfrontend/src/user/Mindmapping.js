import React from "react"
import Base from "../core/Base";
import Logo from "./mindmapping.jpg"


const Mindmapping  = () => (
        <Base title="Mind Mapping" description="This is backend architecture of this project">
        <div className="card">
        <img  src={Logo}  class="img-fluid" alt="Responsive image"/>
        </div>
        </Base>
)

export default Mindmapping;
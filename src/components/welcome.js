import React, { Component } from 'react';
import '../style/welcome.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import background from "../image/REQUIN full logo white on Black background.png";
import { Link, NavLink,BrowserRouter as Router,browserHistory, IndexRoute } from 'react-router-dom';

class	Welcome extends Component {
    componentDidMount(){
        document.title="Requin | WELCOME"
      }
	render() {
        return (
            
            <div className="welcome">
                <MDBRow>
                    <MDBCol>
                        <img className="revine-logo" src={background}/>
                    </MDBCol>
                </MDBRow> 
                <MDBRow>
                    <MDBCol>
                        <h1 style={{ color:"white", fontSize:"140%", width:"60%", marginTop:"3%" }}>Requin, combines community development, relationship management and asset ownership for a more personalized interaction in fashion and luxury.</h1>
                    </MDBCol>
                </MDBRow> 

                <MDBContainer style={{ width:"100px", color:"white", fontSize:"140%", width:"60%", marginTop:"1%" }}>
                    <MDBRow style={{align:"centered"}} >
                        <NavLink style={{ marginRight:"1%", width:"180px" }} className="button is-dark" to="/creation" onClick={this.responsiveToggle}  >
                            THE CREATION
                        </NavLink>
                        <NavLink style={{ marginLeft:"1%", width:"180px"}} className="button is-dark" to="/contact" onClick={this.responsiveToggle}  >
                            CONTACT
                        </NavLink>
                    </MDBRow>
                </MDBContainer> 

                </div>
        )
	}
}

export default Welcome;
            {/* <footer style={{ marginTop:'20% !important;'}}   class="page-footer font-small white">
              <div class="footer-copyright text-center py-3" style={{ marginTop:'150px !important;'}}  >© 2018 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/"> .com</a>
             </div>
</footer> */}
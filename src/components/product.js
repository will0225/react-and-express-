import React, { Component } from 'react';
import '../style/customer.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
//import background from "../image/Black metal waves.jpg";

import banner2 from "../image/requin-brand-portal-app-logo_5.png"
import banner1 from "../image/requin-logo-app_2.png";
import product_image from "../image/product_passport.png";
class	Customer extends Component {
    componentDidMount(){
        document.title="Requin | PRODUCT"
      }
	render() {
        return (
            <div>
                        <div className="customer">
                          <MDBContainer>
                              <MDBRow>
                                 <div className="customer-banner-left">
                                     <img src={banner2}/>
                                 </div>
                                 <div className="customer-banner-center">
                                     
                                 </div>
                                 <div className="customer-banner-right">
                                     <img src={banner1}/>
                                 </div>
                              </MDBRow>
                          </MDBContainer>

                        </div>
                       <div className="customer-content">
                            <img src={product_image} />
                            <p style={{ textAlign:"right"}}>​The Passport of a luxury product 
                                <span style={{ color:"rgb(141, 36, 36)"}}> authenticating </span> its origin, makers,
                                <span style={{ color:"rgb(141, 36, 36)"}}> artisans, designers, </span> ethical making and brand stamp.
                            ​</p>
                            <div style={{ height:"40px"}}></div>
                            <p style={{ textAlign:"left"}}>​​
                                <span style={{ color:"rgb(141, 36, 36)"}}>The true story telling of any luxury purchase </span>  
                                validating its true value,
                                <span style={{ color:"rgb(141, 36, 36)"}}> remembering  </span>  
                                its previous owners, appreciating the Product value
                            </p>
                            <div style={{ height:"40px"}}></div>
                           <p style={{ textAlign:"right"}}>
                               ​The totem of un-deniable ownership and authentication,
                                <span style={{ color:"rgb(141, 36, 36)"}}> passed down </span> 
                                from a brand to its loyal customer and keeping on its adventure on a second-<br/>hand market, because
                                <span style={{ color:"rgb(141, 36, 36)"}}> the life of such privileged products do not stop at its store purchase.</span> 
                                
                            </p>
                            <div style={{ height:"40px"}}></div>
                       </div>
                       <div style={{ height:"40px", backgroundColor:"gray"}}></div>

           </div>     
        )
	}
}

export default Customer;

import React, { Component } from 'react';
import '../style/customer.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
//import background from "../image/Black metal waves.jpg";

import banner2 from "../image/requin-artisan-and-designer-portal-app-logo.png"
import banner1 from "../image/requin-logo-app_2.png";
import brand_image from "../image/brand.png";
class	Customer extends Component {
    componentDidMount(){
        document.title="Requin | BRAND"
      }
	render() {
        return (
            <div>
                        <div className="customer">
                          <MDBContainer>
                              <MDBRow>
                                 <div className="customer-banner-left">
                                     <img src={banner1}/>
                                 </div>
                                 <div className="customer-banner-center">
                                     
                                 </div>
                                 <div className="customer-banner-right">
                                     <img src={banner2}/>
                                 </div>
                              </MDBRow>
                          </MDBContainer>

                        </div>
                       <div className="customer-content">
                            <img src={brand_image} />
                            <p style={{ textAlign:"right"}}>A
                                <span style={{ color:"rgb(141, 36, 36)"}}> customisable </span> portal, set and controlled by the brands to <br/>
                                <span style={{ color:"rgb(141, 36, 36)"}}> manage  </span>global operations,<span style={{ color:"rgb(141, 36, 36)"}}> hold </span>
                                Product Passports™, <span style={{ color:"rgb(141, 36, 36)"}}> connect </span> with its customers, and process 
                                <span style={{ color:"rgb(141, 36, 36)"}}> reporting. </span>
                            ​</p>
                            <div style={{ height:"40px"}}></div>
                            <p style={{ textAlign:"left"}}>
                                ​​ It is the
                                <span style={{ color:"rgb(141, 36, 36)"}}> central point </span>  
                                of visibility and operation  
                                <span style={{ color:"rgb(141, 36, 36)"}}> for Decision Makers and Sale Associates, </span>  
                                maximising their time and performances. 
                            </p>
                            <div style={{ height:"40px"}}></div>
                            <p style={{ textAlign:"right"}}>
                                It is their Black Book, their Marketing tool, their Analytic assistant, their
                                <span style={{ color:"rgb(141, 36, 36)"}}> live true source of data for any future creation. </span> 
                            </p>
                            <div style={{ height:"40px"}}></div>
                       </div>
                       <div style={{ height:"40px", backgroundColor:"gray"}}></div>

           </div>     
        )
	}
}

export default Customer;

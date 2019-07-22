import React, { Component } from 'react';
import '../style/customer.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
//import background from "../image/Black metal waves.jpg";

import banner2 from "../image/requin-brand-portal-app-logo_5.png"
import banner1 from "../image/requin-logo-app_2.png";
import customer_image from "../image/customer.png";
class	Customer extends Component {
    componentDidMount(){
        document.title="Requin | CUSTOMER"
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
                            <div><img src={customer_image} /></div>
                            <p style={{ textAlign:"right"}}>​A <span style={{ color:"rgb(141, 36, 36)"}}> live and smart Customer profile, </span>  connecting the shoppers to their brands of choice.</p>
                            <div style={{ height:"40px"}}></div>
                            <p style={{ textAlign:"left"}}>​​The shoppers set their <span style={{ color:"rgb(141, 36, 36)"}}>  own CRM profile  </span>, authorise its access to selected brands, and are hustle free from the counter time
                                 entering personal and passport's informations, payment at POS, and receipt juggling.</p>
                            <div style={{ height:"40px"}}></div>
                           <p style={{ textAlign:"right"}}>​This portal is <span style={{ color:"rgb(141, 36, 36)"}}> a direct line of communication </span> between the shoppers and their brands, allowing a flow of<br/>
​                               communication, behavioural and purchase data.</p>
                            <div style={{ height:"40px"}}></div>
                            <p style={{ textAlign:"left"}}>​​It <span style={{ color:"rgb(141, 36, 36)"}}>  holds the shopper's purchase history and so all the Product Passports™  </span> acquired post payment,<br/>
                                the ownership's transfer of a product from one owner to the next (<span style={{ color:"rgb(141, 36, 36)"}}> second-hand market </span>), <br/>
                                ​occur through the transfer of its Product Passport™ from one Customer's Profile to another.</p>
                            <div style={{ height:"40px"}}></div>
                       </div>
                       <div style={{ height:"40px", backgroundColor:"gray"}}></div>

           </div>     
        )
	}
}

export default Customer;

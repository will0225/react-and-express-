import React, { Component } from 'react';
import '../style/creation.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {Link} from 'react-router-dom'
import background from "../image/1283421672.png";
import demovideo from "../image/car.jpg";
import sass from "../image/REQUIN Fabergé time bottom part website.png"
import sass1 from "../image/REQUIN Fabergé time image top part website.png"
import canali from "../image/canali white vector.png"
import Eidos from "../image/Eidos napoli logo.png"
import Prada from "../image/Prada white logo.png"
import Giorgio from "../image/Giorgio Armani white logo.png"
import TiffanyCo from "../image/TiffanyCo logo.png"
import Dormeuil from "../image/Dormeuil logo.png"
import Carmina   from "../image/Carmina logo.png"
import montblanc from "../image/montblanc logo.png"
import Hackett from "../image/Hackett logo.png"
import Caruso from "../image/screenshot-2019-04-24-at-8-09-13-pm_orig.png"
import authentic from "../image/authentic.png"
import global from "../image/global-visibility-icon_1.png"
import wifi from "../image/wifi-1_3.png";
import portal from "../image/requin-brand-portal-app-logo_1.png"
import requin_logo from "../image/requin-logo-app_2.png"



class	Creation extends Component {
componentDidMount(){
  document.title="Requin | CREATION"
}
	render() {
        return (
        <div>
         <div className="creation">
          <MDBContainer>
            <MDBRow>
              {/* <MDBCol><h4>screen animation</h4></MDBCol> */}
              <MDBCol><h2 className="bona">A <span style={{ fontWeight:"bold"}}>bona fide solution </span>to a global retail operational <span style={{ color:"white"}}>hurdle</span></h2></MDBCol>
            </MDBRow>
          </MDBContainer>
         </div>   
        <MDBContainer>
            <MDBRow>
              <MDBCol md="6" lg="6" sm="12" style={{  textAlign:'left'}}>

                  <h2 className="requin">REQUIN</h2>
                  <div style={{ height:"35px"}}></div>
                  <h5 className="requin-2019">2019</h5>
                  
                  
              </MDBCol>
              <div style={{ height:"50px"}}></div>
              <MDBCol md="6" lg="6" sm="12" >
                <table style={{ width:"100%"}}>
                  <tbody>
                  <tr>
                    <td className="insteration-td" style={{ paddingRight:"5%"}}>
                      <div className="interation-title">At first iteration</div>
                      <div style={{ height:"35px"}}></div>
                      <div className="interation-content">
                      A customisable omnichannel retail solution supporting both <br/>
                      <span style={{ fontWeight:"bold"}}>the brands and the customers' process,</span><br/>
                      to result in a GDPR compliant database, global stock management, and un-hackable authentications.<br /><br />Requin enables customer to own a product passport as the rightful owner of assets. Requin provides the secondary marketplace for your personlised interactions.
                      </div>
                    </td>
                    <td className="insteration-td" >
                      <div className="gray" style={{ backgroundColor:"rgb(34, 34, 34)",verticalAlign: "text-bottom",padding:"5%", marginTop:"10%"}}>
                        <div>
                            <h2><span>“ Better served by</span> <br/><span style={{ color:"rgb(141, 36, 36)", textAlign:"right"}}>you</span>.”</h2>
                        </div>
                          
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
                </MDBCol>
               {/* <MDBCol>
                   <div className="creation-trailer">
                      <div style={{ height:"60px"}}></div>
                      <a  className='play'>PLAY TRAILER</a>
                    </div>
                    <div className="backspace" style={{ height:"100px"}}></div>
                    <div className="demovideo">
                      <img src={demovideo}/>
                      <p>DEMOVIDEo</p>
                    </div>
                </MDBCol>  */}
                <MDBCol>
                  <div className="saas-space"></div>
                  <div className="the-value">
                    <h2 style={{ color:"white", fontSize:"50px"}}>The VALUE</h2>
                  </div>
                  <div className="sass">
                     <div className="the-value-content">
                        <h4>A SaaS system to facilitate a live stream between the brands and customers. 
                          Requin, for engagement & customer interactions, marketing analytics, sales in store, online and more. </h4>
                        <h4 style={{ fontWeight:"bold", marginTop:"5%"}}>The sustainable digitalisation of the Luxury Good Industry sees Requin</h4>
                        <ol className="list">
                          <li style={{ width:"100%", marginTop:"2%"}}>Collect an infinite amount of <span style={{ color:"rgb(141, 36, 36)"}}>behavioural data</span> to facilitate authorised participants 
                            to support brands' decision making process, </li>
                          <li style={{ width:"100%", marginTop:"2%"}}> To allocate <span style={{ color:"rgb(141, 36, 36)"}}>Product Passports™</span> for authentication and global supply chain management. 
                              With the ever growing secondary design market, Requin offers an application into the second-hand market place,</li>
                          <li style={{ width:"100%", marginTop:"2%"}}>To host a <span style={{ color:"rgb(141, 36, 36)"}}>payment gateway,</span> for a generous variety of payment and <b>donation</b> options.</li>
                        </ol>
                      </div>
                      <div className="the-value-img">
                          {/* <img src={sass1} style={{ width:"340px", height:"20%"}}/> */}
                          <img src={sass} style={{ width:"55%", height:"86%"}}/>
                         
                      </div>
                  </div>
                 
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <div className="industry-solution">
          <MDBContainer>
            <MDBRow>
             <div className="industry-left">
                <h2 style={{ fontSize:"200%"}} className="industry-to">Industry solutions to</h2>
                <div style={{ height:"35px"}}></div>
                <h4>2019</h4>
                <div style={{ height:"35px"}}></div>
                <h4 style={{ float:"right", textAlign:"left", fontStyle:"italic"}}>The following features have been developed in conversation and feedbacks from over 10 
                global luxury brands from various specialities.</h4>
                <div className="industry-img">
                          <div className="img-wrap-a"><img src={canali}/></div>
                          <div className="img-wrap-b"> <img src={Eidos}/></div>
                          <div className="img-wrap-c"> <img src={Prada}/></div>
                          <div className="img-wrap-d"><img src={Giorgio}/></div>
                          <div className="img-wrap-f"><img src={TiffanyCo}/></div> 
                          <div className="img-wrap-j"><img src={Hackett}/></div>
                          <div className="img-wrap-g"><img src={Dormeuil}/></div>
                          <div className="img-wrap-h"><img src={Carmina}/></div>
                          <div className="img-wrap-i"><img src={montblanc}/></div>
                          <div className="img-wrap-e"><img src={Caruso}/></div>
                         
                </div>
                <div style={{ marginTop:"50px"}}></div>
                <h3 style={{ color:'rgb(141, 36, 36)'}}>AUTHENTICATION</h3>
                <div style={{ marginTop:"20px"}}></div>
                <h3>The Product PassportⒸ technology enables you to prove ownership of your retail designs. Owning a Product PassportⒸ
                  is owning a products identity. 
                </h3>
                <div style={{ marginTop:"20px"}}></div>
                <h3 style={{ color:'rgb(141, 36, 36)'}}>SUPPLY CHAIN MANAGEMENT </h3>
                <div style={{ marginTop:"20px"}}></div>
                <h3>From the initial creation of each unique design your product is digitally identifiable for design provenance. 

                </h3>
                <div style={{ marginTop:"20px"}}></div>
                <h3 style={{ color:'rgb(141, 36, 36)'}}>PAYMENT GATEWAYS </h3>
                <div style={{ marginTop:"20px"}}></div>
                <h3>Transact in a mobile environment with seamless transactions.</h3>
                <div style={{ marginTop:"20px"}}></div>
                <h3 style={{ color:'rgb(141, 36, 36)'}}>MORE TO COME</h3>
                <div style={{ marginTop:"20px"}}></div>
                <h3>Currently in development stage, and will be revealed at the release of the REQUIN upgrade.</h3>
                <div style={{ marginTop:"20px"}}></div>
            </div>
        <div className="industry-right">
            <div className="industry-right-img" style={{ marginTop:"60%"}}><img src={authentic} /></div>
            <div className="industry-right-img"><img src={global} style={{ marginLeft:"10%"}}/></div>
            <div className="industry-right-img"><img src={wifi} /></div>
        </div>
           </MDBRow>
        </MDBContainer>
          
        </div>
        <div className="foot">
            <div style={{ height:"50px"}}></div>
            <h1 style={{ fontSize:"200%"}}>From Creation to Satisfaction</h1>
            <div style={{ height:"50px"}}></div>
            <div className="foot-content">
                <div className="portal">
                   <img src={portal}/>
                   <div style={{ height:"15px"}}></div>
                   <p style={{ color:"white", fontWeight:"bold"}}>Artisan & Designer Portal</p>
                   <div style={{ height:"30px"}}></div>
                   <p style={{ color:"white"}}>Recognition and Exposure given back to the original creators through ​each Product Passport™</p>
                </div>
                <div className="requin_logo">
                   <img src={requin_logo}/>
                   <div style={{ height:"15px"}}></div>
                   <p style={{ color:"white", fontWeight:"bold"}}>Customer Portal</p>
                   <div style={{ height:"30px"}}></div>
                   <p style={{ color:"white"}}>Shopper's profile, behaviours, purchases <br/>history, all within <br/>GDPR compliance </p>
                </div> 
                <div className="portal_2">
                 <img src={portal}/>
                 <div style={{ height:"15px"}}></div>
                 <p style={{ color:"white", fontWeight:"bold"}}>Brand Portal</p>
                 <div style={{ height:"30px"}}></div>
                  <p style={{ color:"white"}}>Authority generating authentication of products, manager of stock and company/store analytics agent</p>
                </div>
            </div>
            <div style={{ height:"45px"}}></div>
            <h2 style={{ color:"white", fontSize:"250%", textAlign:"center"}}>Get in <span style={{ color:"#8d2424"}}>Touch</span></h2>
            <div style={{ height:"45px"}}></div>
            <p style={{ color:"white"}}>To get a more exclusive look at REQUIN Tech and its founders,<br/>
              Please request your introduction.</p>

              <Link to='contact'>
                <button className="creation-button">CONTACT</button>
              </Link>

            <div style={{ height:"70px"}}></div>
        </div>
    </div>               
        )
	}
}

export default Creation;

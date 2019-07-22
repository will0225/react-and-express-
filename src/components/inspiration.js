import React, { Component } from 'react';
import '../style/inspiration.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Slide } from 'react-slideshow-image';
import Carousel from "./carousoel"
import background from "../image/REQUIN full logo white on Black background.png";
import threefish from "../image/requin.png";
import slider1 from "../image/Cendrawasih.jpeg"
import slider2 from "../image/whale-shark-swimming-in-cercle-with-fish-black_3_orig.png"
import slider3 from "../image/whale-shark-swimming-with-fish-black_4_orig.png"
import '../style/slider.css';
import RMIT from "../image/RMIT activator logo.png"

const slideImages = [
    slider1,
    slider2,
    slider3
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
};

const Slideshow = () => {
    return (
        <Slide {...properties}>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImages[0]})`, backgroundSize:'70%', backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
                </div>
            </div>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImages[1]})`, backgroundSize:'100%', backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
                </div>
            </div>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImages[2]})`, backgroundSize:'70%', backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
                </div>
            </div>
        </Slide>
    )
};

class	Inspiration extends Component {
    componentDidMount(){
        document.title="Requin | INSPIRATION"
      }
	render() {
        return (
            <div>
                 <div className="inspiration">
                            <MDBRow>
                                <MDBCol>
                                   <p className="inspiration-text-1">The <span style={{ color:"rgb(141, 36, 36)"}}>INSPIRATION</span></p>
                                   <p className="inspiration-text-2"> Your luxury shopping experience start and end in the palm of your hand.</p>
                                </MDBCol>
                            </MDBRow>  
                </div>
                <div className="inspiration-content">
                    <div className="content-top">
                        <div className="content-top-left">
                            <p style={{ fontSize:"250%"}}>The NAME</p>
                            <div style={{ height:"30px"}}></div>
                            <p>Searching a fit for:</p>
                            <div style={{ height:"30px"}}></div>
                            <ul style={{ marginLeft:"3%", lineHeight:"39px"}}>
                                <li style={{ width:"100%"}}>Data cleaning and collection</li>
                                <li style={{ width:"100%"}}>Protection</li>
                                <li style={{ width:"100%"}}>Constant motion and heed</li>
                            </ul>
                        </div>
                        <div className="content-top-center">
                             <Slideshow />
                        </div>
                        <div className="content-top-right">
                        <p>What came to mind:</p>
                          
                            <div style={{ height:"30px"}}></div>
                            <ul style={{ marginLeft:"5%", lineHeight:"30px"}}>
                                <li style={{ width:"100%"}}>An ocean of data </li>
                                <li style={{ width:"100%"}}>The "fish" symbolic in many culture (rebirth, luck, independence, adaptation, etc.)</li>
                                <li style={{ width:"100%"}}>Sharks are always in movement and looking out</li>
                                <li style={{ width:"100%"}}>Whale sharks travel the globe at their own imposing pace </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-choice">
                        <p style={{fontSize:"x-large"}}>The <span style={{ color:"rgb(141, 36, 36)", fontSize:'x-large'}}> Whale Shark </span> became our choice</p>
                    </div>
                    <div style={{ height:"35px"}}></div>
                    <div className="content-middle">
                        <p style={{lineHeight:"1.8em"}}> <span style={{ fontWeight:"bold"}}>Whale Sharks (<i>Rhincodon typus</i>), </span><br/>
                        are massive and slow moving, have very large mouths, and are filter feeders carpet 
                            shark (which means that they feed on plankton and very small fishes).
                        </p>
                        <p style={{lineHeight:"1.8em"}}>
                            Despite being the largest known extant fish species in the world, they are devoid of any aggressiveness, 
                            are docile and friendly, even allowing swimmers to catch a ride along them.  This specie is considered 
                            endangered by the IUCN (International Union for Conservation of Nature), and was classified in June 2018 
                            by the NZ Department of Conservation, as "Migrant" with the qualifier "Secure Overseas" under the New 
                            Zealand Threat Classification System.
                        </p>
                        <br/>
                        <p style={{lineHeight:"1.8em"}} >This species was also added to <i>Appendix II</i> of the CITES in 2003 to regulate the international trade of live specimens and its parts.<br/>
                            Hundreds of whale sharks are illegally killed every year in China for their fins, skins, and oil.
                        </p>
                        <div style={{ height:"35px"}}></div>
                        <p style={{ lineHeight:"1.8em", fontWeight:"bold"}}><b>By choosing this specie as our brand emblem, on top of the above fitting reasons, </b><span style={{ color:"rgb(141, 36, 36)"}}>we wish to 
                            communicate and support wild life and environmental protection awareness.</span>
                        </p>
                        <div>
                            <img src={threefish}/>
                        </div>
                        <div style={{ height:"20px"}}></div>
                        <p className='origin-story'>Origin STORY</p>
                        <div  className="origin-story-bottom"></div>
                        <p style={{lineHeight:"2.8em"}}>​During their carriers in the <span style={{ color:"rgb(141, 36, 36)"}}>Luxury industry</span>, the founders were exposed
                         to the <span style={{ color:"rgb(141, 36, 36)"}}>monstrous retail's operational old beast.</span></p>
                         <p style={{lineHeight:"1.8em"}}>From the shopping floor, to its head offices and geographical markets, our founders experienced an 
                             infrastructure that was outdated, laggard, limited and powerless against the <span style={{ color:"rgb(141, 36, 36)"}}>Counterfeit</span>  market's expansion. </p>
                        <br />
                        <p style={{lineHeight:"1.8em"}}>As customers, they suffered the transitional loss of data <span style={{ color:"rgb(141, 36, 36)"}}>GDPR</span>  caused, being erased from all data bases,  
                         <span style={{ color:"rgb(141, 36, 36)"}}> losing valuable history,</span> authentication source, and warranty on their previous purchases.</p> 
                        <br />
                        <p style={{lineHeight:"1.8em"}}>As <span style={{ color:"rgb(141, 36, 36)"}}>second-hand</span> resellers, they struggled with the <span style={{ color:"rgb(141, 36, 36)"}}>lack</span> of undeniable authentication 
                            proof and transfer of this complex <span style={{ color:"rgb(141, 36, 36)"}}>ownership</span> (attached to after-sale services).</p>    
                        <br />
                        <p style={{ lineHeight:"1.8em", fontWeight:"bold"}}>When, they entered the Blockchain and Fintech industry, some obvious applications 
                            in solving major luxury hurdles came straight  to mind and there, <span style={{ color:"rgb(141, 36, 36)"}}><b>REQUIN</b> technology started.</span> 
                        </p>
                         <div style={{ height:"70px"}}></div>   
                        {/*<p className="guide-text">The GUIDES </p>    
                        <div className="activator">
                            <img src={RMIT}/>
                           
                        </div>
                        <div style={{ height:"70px"}}></div>   
                        <p className="founder-text">The FOUNDERS </p>  
                        
                        <div style={{ height:"100px"}}></div>  */}
                  </div>
                </div>
            </div>
                       
                  
        )
	}
}

export default Inspiration;

import React, { Component } from 'react';
import '../style/contact.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput  } from "mdbreact";
import background from "../image/REQUIN full logo white on Black background.png";

class	Welcome extends Component {
        constructor(props){
                super(props);
                var vv = props.data
                this.state = {
                    state : "contact",
                    sendEmail:true,
                    contactInfo:{
                            first:"",
                            last:"",
                            email:"",
                            comment:""
                    }
                }

            }
        onChangeValue = (e) =>{
                const { contactInfo } = this.state
                contactInfo[e.target.name] = e.target.value
                this.setState({
                        contactInfo
                })
         }   
        submit = () =>{
                this.setState({
                        sendEmail:false
                })
        }

        componentDidMount(){
                document.title="Requin | CONTACT"
              }
	render() {console.log(this.state.contactInfo)
        const data = this.state.sendEmail;
        return (
                <div>
                        <div className="contact">
                           <MDBRow>
                                <MDBCol>
                                   <p className="contact-text">CONTACT</p>
                                </MDBCol>
                            </MDBRow> 
                        </div>
                       <div className="contact-content">
                               <div className="contact-content-left">
                                 <p className="content-left-touch">Get In Touch</p>
                                 <div style={{ height:"40px"}}></div>
                                 <p><span style={{ color:"rgb(141, 36, 36)"}}>EMAIL /</span> tyrone@requin.tech</p>
                                 <div style={{ height:"25px"}}></div>
                                 <p>Feel free to get in touch with us directly via the email address above, or simply via this form.
                                 </p>
                                 <p>Any inquiries are welcome.</p>
                                 <div style={{ height:"40px"}}></div>
                                 <div className="contact-content-block">
                                         
                                        <p><span style={{ fontSize:"50px"}}>“</span> There are no stupid question, </p>
                                        <p>progress is built upon 
                                        <span style={{ color:"rgb(141, 36, 36)"}}> curiosity.</span>”</p>
                                 </div>
                                 <div style={{ height:"70px"}}></div>
                               </div>
                               {data&&data?(
                               <div className="contact-content-right">
                                       <div style={{ height:"40px"}}></div>
                                       <div className="box">						
                                <form id="contact-form" method="POST" action="https://formspree.io/julianw@requin.tech" role="form" style={{backgroundColor : '#000000'}}>		
                                <div className="messages" />
                                <div className="controls">
                                        <div className="container" style={{width: '80%'}}>
                                        <div className="col-md-12">
                                        <div className="form-group">
                                        <label htmlFor="form_name" style={{color : '#8D2424'}}>First Name</label>
                                        <br /><br />
                                        <input id="form_name" type="text" name="name" className="form-control" placeholder="First" required="required" data-error="Firstname is required." style={{backgroundColor : '#000000'}} />
                                        <div className="help-block with-errors" />
                                        </div>
                                        </div>
                                        <div className="col-md-12">
                                        <div className="form-group">
                                        <label htmlFor="form_lastname" style={{color : '#8D2424'}}>Last Name </label>
                                        <br /><br />
                                        <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Last" required="required" data-error="Lastname is required." style={{backgroundColor : '#000000'}} />
                                        <div className="help-block with-errors" />
                                        </div>
                                        </div>
                                        <div className="col-md-12">
                                        <div className="form-group">
                                        <label htmlFor="form_email" style={{color : '#8D2424'}}>Email</label>
                                        <br /><br />
                                        <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." style={{backgroundColor : '#000000'}} />
                                        <div className="help-block with-errors" />
                                        </div>
                                        </div>
                                        <div className="form-group">
                                                <label htmlFor="form_message" style={{color : '#8D2424'}}>Message</label><br /><br />
                                        <textarea id="form_message" name="message" className="form-control" placeholder="Include message here." rows={4} required="required" data-error="Please, leave us a message." style={{backgroundColor : '#000000'}} defaultValue={""} />
                                        <div className="help-block with-errors" />
                                        </div>
                                        <div className="col-md-12">
                                        <br /><br />
                                        <input type="submit" className="btn btn-success btn-send" defaultValue="Send message" style={{backgroundColor : '#000000'}} />
                                        </div>
                                        </div>


                                        
                                </div>
                                </form>
                                </div>
                                       
                              </div>):( <div className="contact-content-right"><p>Thank you. Your information has been submitted.</p> </div>)}
                              <div style={{ height:"50px"}}></div>
                              
                       </div>
                </div>  
        )
	}
}

export default Welcome;

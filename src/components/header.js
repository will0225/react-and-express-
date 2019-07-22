
import React, { Component, PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link, NavLink,BrowserRouter as Router,browserHistory, IndexRoute } from 'react-router-dom';
import '../style/header.css'
import { FilterTiltShiftSharp } from '@material-ui/icons';

const isActive = (path, match, location) => !!(match || path === location.pathname);

class Header extends Component {
    constructor(props){
        super(props);
        
        this.state={
            show:'none',
            buger:false,
            data:'800',
            isTop:true
        
        }

        this.shown = this.shown.bind(this)
        this.hidden = this.hidden.bind(this)
        this.responsiveToggle = this.responsiveToggle.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }

     
     handleScroll() {
         console.log(window.scrollY)
        if (window.scrollY > 50) {
          this.setState({isTop:false})
        } else {
            this.setState({isTop:true})
        }
      }
    // componentDidMount(){
    //     console.log('component mounted')
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    componentWillUnmount() {
        console.log('component will unmount')
        window.removeEventListener('scroll', this.handleScroll);
      }
    
    shown(){
        this.setState({
            show:"block"
        })
    }

    hidden(){
        this.setState({
            show:"none"
        })
    }

    responsiveToggle(e){
         this.setState({
             buger:!this.state.buger
         })
        
    }

    updateDimensions() {
        
          this.setState({ data: window.innerWidth });
       
      }
      
    
      componentDidMount(){
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));

        console.log('component mounted')
        window.addEventListener('scroll', this.handleScroll);
        //window.location.reload();
      }
    
    renderAuthLinks() { 
        if (this.props.authenticated) {
            return (
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-NavLink">
                        {localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).email : "Loading..."}
                    </a>

                    <div className="navbar-dropdown">
                        <NavLink className="navbar-item" to="/signout" refresh="true">
                            Sign out
                        </NavLink>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="navbar-item">
                    <div className="buttons">
                        <NavLink className="button is-light" to="/signup" refresh="true">
                            Sign up
                        </NavLink>
                        <NavLink className="button is-dark" to="/signin" refresh="true">
                            Log in
                        </NavLink>
                    </div>
                </div>
            );
        }
    }
   
    renderBrandLink() {
        if (this.props.authenticated) {
            return (
                <a className="navbar-item" href="/welcome" style={{ color:'whtie'}}>
                    <h1 className="revine-title" style={{ opacity:'1'}}> Requin </h1>
                </a>
            );
        }
        else {
            return (
                <a className="navbar-item" href="/" style={{ color:'whtie'}}>
                    <h1 className="revine-title" style={{ color:this.state.isTop?("white"):("white"), opacity:'1'}}> Requin </h1>
                </a>
            );
        }
    }

    isActive(match, location) {
        console.log(location);
    }

    render() {console.log(this.state)
        var state = this.state.show;
        var res = this.state.buger;
        if(this.state.data>768)
           { res = true;}
        
        const isTop = this.state.isTop
       // console.log('authenticate', this.props.authenticated)
        return (
            <nav className="navbar" aria-label="main navigation" style={{ backgroundColor:this.state.isTop?("#ffffff00"):('black')}}> 
                <div className="navbar-brand">
                    {this.renderBrandLink()}
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" 
                        data-target="navbarBasicExample" onClick={this.responsiveToggle}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu" style={{ display:res?("block"):("none")}}>
                    <div className="navbar-start">
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {/* {this.renderAuthLinks()} */}
                                
                                {!this.props.authenticated ?(
                                <div className="navbar-item">
                                    <div className="buttons">
                                    
                                        <NavLink className="button is-dark"  exact to="/" onClick={this.responsiveToggle}  >
                                            WELCOME
                                        </NavLink>
                                        <NavLink className="button is-dark"   to="/creation" onClick={this.responsiveToggle}  >
                                            THE CREATION
                                        </NavLink>
                                        {/* <CustomMenu /> */}
                                        {/* <NavLink className="button is-dark"  to="/product" onMouseOver={this.shown}  onMouseOut={this.hidden}  >
                                                SMART PASSPORT
                                            <div onMouseOver={this.shown}  onMouseOut={this.hidden} style={{ position:"fixed",top:"35px", width:"160px", height:"39px"}}></div>
                                            <div className="passport-child" style={{ display:state}} onMouseOver={this.shown}  onMouseOut={this.hidden}>
                                                <ul>
                                                    <li>
                                                        <NavLink to="/product" onClick={this.responsiveToggle} refresh="true">
                                                            <span className="sub-menu">PRODUCT PASSPORT</span>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/customer" onClick={this.responsiveToggle} refresh="true">
                                                            <span className="sub-menu">CUSTOMER PASSPORT</span>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/brand" onClick={this.responsiveToggle} refresh="true">
                                                            <span className="sub-menu">BRAND PASSPORT</span>
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                                
                                            </div>
                                            <div className="mobile-list" style={{ display:'none'}} onMouseOver={this.shown}  onMouseOut={this.hidden}>
                                                <ul>
                                                    <li>
                                                        <NavLink to="/product" onClick={this.responsiveToggle}  >
                                                            <span>PRODUCT PASSPORT</span>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/customer" onClick={this.responsiveToggle}  >
                                                            <span>CUSTOMER PASSPORT</span>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/brand" onClick={this.responsiveToggle}  >
                                                            <span>BRAND PASSPORT</span>
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                                
                                            </div>
                                        </NavLink> */}
                                    
                                        
                                        <NavLink className="button is-dark" to="/inspiration" onClick={this.responsiveToggle}  >
                                            THE INSPIRATION
                                        </NavLink>
                                        <NavLink className="button is-dark" to="/contact" onClick={this.responsiveToggle}  >
                                            CONTACT
                                        </NavLink>
                                        {/* <NavLink className="button is-dark" to="/signup" onClick={this.responsiveToggle}  >
                                            Sign up
                                        </NavLink> */}
                                        <NavLink className="button is-dark" to="/signin" onClick={this.responsiveToggle}  >
                                            LOG IN
                                        </NavLink>
                                    
                                    </div>
                    
                                </div>):( 
                                <div className="navbar-item has-dropdown is-hoverable" style={{  marginTop: "15px"}}>
                                    <a className="navbar-NavLink" style={{ color:this.state.isTop?('black'):('gray')}}>
                                        {localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).email : "Loading..."}
                                    </a>

                                    <div className="navbar-dropdown" style={{ backgroundColor:"black"}}>
                                        <NavLink className="navbar-item" to="/signout" style={{ color:'white', backgroundColor:"black"}}  >
                                            Sign out
                                        </NavLink>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated }
};

export default connect(mapStateToProps)(Header);

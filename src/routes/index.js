import React from 'react';
import { Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import App from '../components/app';
import RequireAuth from '../components/auth/require_auth';
import RequireSecurity from '../components/auth/require_security';
import Signin from '../components/auth/signin';
import Signout from '../components/auth/signout';
import Signup from '../components/auth/signup';
import Welcome from '../components/welcome';
import Creation from '../components/creation';
import Customer from "../components/customer";
import Brand from "../components/brand";
import Product from "../components/product";
import Contact from "../components/contact";
import Inspiration from "../components/inspiration";
import NotFound from '../components/errors/notfound';
import CreateCompany from '../components/createcompany';
import PublicDashboard from '../components/public_dashboard';

// Store management
import Store from '../components/store_administration/index';

// Brand Administration
import Stores from '../components/company_administration/stores';
import Dashboard from '../components/company_administration/dashboard';

import {
    USER_ADMIN,
    USER_BRAND_ADMIN,
    USER_STORE_MANAGER,
    USER_SALEPERSON,
    USER_NOTHING
} from '../actions/types';
import ManageStore from '../components/company_administration/stores/manage_store';


const Routes = () => {
    return (
        <App>
           <Switch>
                <Route exact path="/" component={RequireAuth(Welcome, true)} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signout" component={Signout} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/creation" component={RequireAuth(Creation, true)} />
                <Route exact path="/customer" component={RequireAuth(Customer,true)} />
                <Route exact path="/product" component={RequireAuth(Product,true)} />
                <Route exact path="/brand" component={RequireAuth(Brand,true)} />
                <Route exact path="/contact" component={RequireAuth(Contact,true)} />
                <Route exact path="/inspiration" component={RequireAuth(Inspiration,true)} />
                <Route exact path="/welcome" component={RequireAuth(PublicDashboard, false)} />
                <Route exact path="/stores" component={RequireAuth(RequireSecurity([USER_BRAND_ADMIN], Stores))} />
                <Route exact path="/createcompany" component={RequireAuth(CreateCompany, true)} />
                <Route exact path="/stores/:id" component={RequireAuth(RequireSecurity([USER_BRAND_ADMIN, USER_STORE_MANAGER], ManageStore))} />
                <Route exact path="/dashboard" component={RequireAuth(RequireSecurity([USER_BRAND_ADMIN], Dashboard))} />
                <Route  path="/store" component={RequireAuth(RequireSecurity([USER_STORE_MANAGER], Store))}/>
                <Route path="*" component={NotFound} />
           </Switch>
        </App>
    );
};

export default Routes;

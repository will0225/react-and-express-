import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from './products';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/store/products" component={Products}/>
		</Switch>
	)
}

export default Routes;
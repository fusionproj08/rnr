
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Navbar from './Navbar/containers/index';
import Profile from './profile/containers/index';
import Login from './Login/containers/index';
const Routes = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route exact path='/home' component={Home} /> 
                <Route exact path='/about' component={About} /> 
                <Route exact path='/contact' component={Contact} /> 
                <Route exact path='/profile' component={Profile} /> 
                <Route exact path='/services' component={Services} /> 
                <Route exact path='/login' component={Login} /> 

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;


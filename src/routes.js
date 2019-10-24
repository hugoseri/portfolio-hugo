import React from 'react'
import {Router, Route, Switch} from 'react-router'

import Main from './components/main'
import NotFound from './components/error'

import {createBrowserHistory} from "history";


const Routes = {
    run() {
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route component={Main}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </Router>
        );
    }
};

export default Routes;

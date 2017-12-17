import React from "react";
import {
    MemoryRouter as Router,
    Route, Redirect
} from 'react-router-dom'

import { Header } from "./Component/Layout";
import { HomePage, SearchPage, Page404 } from "./Component/Pages";

export default () => {
    return (
        <Router>
            <div>
                <Header></Header>
                <Route exact path="/" render={() => (<Redirect to="/home" />)} />
                <Route exact path='/home' component={HomePage} />
                <Route path='/search/:query' component={SearchPage} />
                <Route path='/moments' component={Page404} />
                <Route path='/notifications' component={Page404} />
                <Route path='/message' component={Page404} />
            </div>
        </Router>
    );
}
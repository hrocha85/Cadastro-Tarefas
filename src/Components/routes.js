import React, { Component } from 'react'

import {Home} from '../pages/home/home';
import {jobs} from '../pages/jobs/jobs';
import {LoginPage} from '../pages/login/login';


import { BrowserRouter, Route, Switch}  from "react-router-dom";


export class routes extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/tarefas" component={jobs} />
              <Route path="/login" component={LoginPage} />
            </Switch>
            </BrowserRouter>
        )
    }
}

export default routes

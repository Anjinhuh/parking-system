import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import principalPage from './pages/pagePrincipal.js'
import controlePage from './pages/controle.js'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={principalPage} />
                <Route path="/controle" exact component={controlePage} />
            </Switch>
        </BrowserRouter>
    )
}
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SearchPage from '../pages/SearchPage'
import {SEARCH} from './paths'


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route component={SearchPage} exact path={SEARCH} />
            </Switch>
        </Router>
    )
}

export default Routes

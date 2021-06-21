import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'
import SearchPage from '../pages/SearchPage'
import {SEARCH} from './paths'


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Header />
                <Route component={SearchPage} exact path={SEARCH} />
            </Switch>
        </Router>
    )
}

export default Routes

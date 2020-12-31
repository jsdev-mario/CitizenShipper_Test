import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import loadable from '@loadable/component'
import FullLoader from 'components/fullloader';

const SignIn = loadable(() => import('./signin'))
const ShipmentList = loadable(() => import('./shipmentList'))
const ShipmentDetails = loadable(() => import('./shipmentDetails'))



class RouteApp extends Component {

    constructor(props) {

        super(props)

        this.state = {}
    }

    componentDidMount = () => {}

    render() {

        return (
            <React.Fragment>
                <FullLoader/>
                <Switch>
                    <Route path='/signin' component={SignIn}/>
                    <Route path='/shipments/:id' component={ShipmentDetails}/>
                    <Route path='/shipments' component={ShipmentList}/>
                    <Redirect path='/' to='/signin'/>
                </Switch>
            </React.Fragment>
        )
    }
}

export default RouteApp;

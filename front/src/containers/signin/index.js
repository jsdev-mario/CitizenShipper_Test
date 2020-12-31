import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { updateDriver } from 'store/actions'
import './index.scss'


class SignIn extends Component {

    constructor(props) {

        super(props)

        this.state = {

            driverNumber: ''
        }
    }


    componentDidMount = () => {

    }

    login = () => {

        if (!this.state.driverNumber) return;

        this.props.updateDriver({ number: this.state.driverNumber })

        this.props.history.push('/shipments')
    }

    render() {

   
        return (
            <div id="signin" className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="shadow p-5">
                            <h1 className="mb-4">Sign In</h1>
                            <div className="form-group">
                                <label htmlFor="driverNumber">Driver Number</label>
                                <input type="text" name="driverNumber" id="driverNumber" className="form-control" placeholder="Please input driver nuber" 
                                onChange={(e) => {
                                    this.setState({driverNumber: e.target.value})
                                }}/>
                            </div>
                            <button className="btn btn-primary" onClick={this.login}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null, { updateDriver })(SignIn));
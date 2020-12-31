import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import loadable from '@loadable/component'
import {
    showFullLoader,
    handleHTTPError
} from 'store/actions'
import {
    searchShipments
} from 'apis'
import './index.scss'
import ShipmentItem from 'components/shipmentItem'



class ShipmentList extends Component {

    constructor(props) {

        super(props)

        this.state = {

            shipments:[],
        }
    }


    componentDidMount = () => {

        this.searchShipments()
    }

    searchShipments = () => {

        this.props.showFullLoader(true)

        searchShipments({}).then(data => {

            this.setState({shipments: data.data})

            this.props.showFullLoader(false)

        }).catch(error =>this.props.handleHTTPError(error))
    }

    gotoDetails = (shipment) => {

        this.props.history.push(`/shipments/${shipment.id}`)
    }
    

    render() {

        const displayShipmentList = () => {

            return this.state.shipments.map((shipment, index) => {

                return <ShipmentItem shipment={shipment} key={index} onClick={this.gotoDetails}/>
            })
        }

        return (
            <div id="shipment-list" className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="py-4">Shipments</h2>
                        {displayShipmentList()}
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (reducer) =>{

    const { driver } = reducer;

    return { driver };
}


export default withRouter(connect(mapStateToProps, {
    
    showFullLoader, handleHTTPError

})(ShipmentList));
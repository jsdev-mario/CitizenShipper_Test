import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    showFullLoader,
    handleHTTPError
} from 'store/actions'
import {
    getShipment, getBids, updateBid
} from 'apis'
import './index.scss'
import Back from 'components/back';
import BidItem from 'components/bidItem';
import EditBidDlg from 'components/editBidDlg';


class WorkshopDetails extends Component {

    constructor(props) {

        super(props)

        this.state = {

            shipment: null,

            selectedBid: null,

            bids: [],

            showEditDlg: false,

            loading: false,
        }
    }


    componentDidMount = () => {

        this.getShipment()
    }

    componentDidUpdate = (prevProps, prevState) => {

        if (prevProps.match.params.id !== this.props.match.params.id) {

            this.getShipment()
        }
    }


    getShipment = () => {

        const id = this.props.match.params.id

        if (!id) this.props.history.push('/shipments')

        const params = { id: id}

        this.props.showFullLoader(true)

        getShipment(params).then(data => {

            this.props.showFullLoader(false)

            this.setState({shipment: data.data}, this.getBids)

        }).catch(error => this.props.handleHTTPError(error))
    }


    getBids = () => {

        const params = { shipmentId: this.state.shipment.id}

        this.props.showFullLoader(true)

        getBids(params).then(data => {

            this.props.showFullLoader(false)

            this.setState({bids: data.data})

        }).catch(error => this.props.handleHTTPError(error, this.props))
    }

    goBack = () => {

        this.props.history.push('/shipments')
    }

    editBid = (bid) => {

        this.setState({ selectedBid: bid}, this.toggleEditDlg)
    }

    updateBid = (bid) => {

        updateBid({
            id: bid.id,
            price: bid.price,
            message: bid.message
        }).then(data => {

            const newBids = [...this.state.bids]

            const index = newBids.findIndex(b => b.id === bid.id)

            newBids.splice(index, 1, bid)

            this.setState({bids: newBids})
        })
    }

    deleteBid = (bid) => {

    }

    toggleEditDlg = () => {

        this.setState({ showEditDlg: !this.state.showEditDlg})
    }

    render() {

        if (!this.props.driver || !this.state.shipment) return null
        

        const displayBids = () => {
            
            return this.state.bids.map((bid, index) => {

                return <BidItem 
                    bid={bid} driver={this.props.driver} key={index} 
                    onEdit={this.editBid} 
                    onDelete={this.deleteBid}
                />
            })
        }

        return (
            <div id="shipment-details" className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12"> 
                                <Back onClick={this.goBack}>Back</Back>
                                <div className="content shadow py-4 px-5 mb-5 pointer">
                                    <small className="category text-grey font-weight-bold">Category: {this.state.shipment.category}</small>
                                    <h4 className="title py-3">{this.state.shipment.title}</h4>
                                    <p className="description">{this.state.shipment.description}</p>
                                    <small className="address">Address: {this.state.shipment.address}</small>
                                </div>
                                <div className="bids shadow">
                                    {displayBids()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <EditBidDlg 
                    isOpen={this.state.showEditDlg} 
                    toggle={this.toggleEditDlg} 
                    bid={this.state.selectedBid}
                    update={this.updateBid}
                />
            </div>
        )
    }
}



const mapStateToProps = ( reducer ) =>{

    const { driver } = reducer;

    return { driver };
}

export default withRouter(connect(mapStateToProps, {
    
    showFullLoader,
    
    handleHTTPError

})(WorkshopDetails));
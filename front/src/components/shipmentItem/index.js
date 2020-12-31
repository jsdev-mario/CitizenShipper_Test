import React, { Component } from 'react'
import './index.scss'

class ShipmentItem extends Component {

    render() {
        return (
            <div className="shipment-item shadow py-4 px-5 mb-5 pointer" onClick={() => {
                this.props.onClick(this.props.shipment)
            }}>
                <small className="category text-grey font-weight-bold">Category: {this.props.shipment.category}</small>
                <h4 className="title py-3">{this.props.shipment.title}</h4>
                <p className="description">{this.props.shipment.description}</p>
            </div>
        )
    }
}

export default ShipmentItem

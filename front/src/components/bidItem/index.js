import React, { Component } from 'react'
import './index.scss'

class BidItem extends Component {

    render() {
        
        return (
            <div className="row bid-item border-bottom py-4 px-5 pointer m-0">
                <div className="col-12">
                    <p className="description">{this.props.bid.message}</p>
                </div>
                <div className="col-md-8 d-flex justify-content-between align-items-center mb-3 mb-md-0">
                    <p className="text-grey mb-0">Driver Name: <span className="font-weight-bold text-dark">{this.props.bid.driver.name}</span></p>
                    <p className="text-grey mb-0">Price: <span className="font-weight-bold text-dark">$ {this.props.bid.price}</span></p>
                </div>
                <div className="col-md-4 d-flex justify-content-end align-items-center">
                {
                    this.props.driver.number === this.props.bid.driver.number &&
                    <>
                        <button className="btn btn-primary mr-2" onClick={()=>this.props.onEdit(this.props.bid)}> Edit </button>
                        <button className="btn btn-danger" onClick={()=>this.props.onDelet(this.props.bid)}> Delete </button>
                    </>
                }
                </div>
            </div>
        )
    }
}

export default BidItem

import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'
import { 
    
} from 'store/actions'



class EditBidDlg extends Component {

    constructor(props){

        super(props);

        this.state = {

            bid: null
        }
    }
    

    componentDidMount = () => { 

    }

    componentDidUpdate = (prevProps) => {

        if ((!prevProps.bid && this.props.bid) || (prevProps.bid && this.props.bid && prevProps.bid.id !== this.props.bid.id)) {
            
            this.setState({bid: this.props.bid})
        }
    }


    update = () => {
        
        this.props.toggle();
        
        this.props.update(this.state.bid)
    }


    render() {

        if (!this.state.bid) return null

        return (
            <Modal isOpen={this.props.isOpen}>
                <ModalHeader toggle={this.props.toggle}>Edit Bid</ModalHeader>
                <ModalBody>
                    <div className="row checkoutdlg-body">
                        <div className="col-12">
                            <div className=" from-group">
                                <label>Price ($)</label>
                                <input className="form-control" type="number" id="price" name="price" value={this.state.bid.price} onChange={(e) => {
                                    const newBid = {...this.state.bid, price: Number(e.target.value)}
                                    this.setState({ bid: newBid})
                                }}/>
                            </div>
                            <div className=" from-group">
                                <label>Message</label>
                                <textarea className="form-control" type="message" name="message" value={this.state.bid.message} onChange={(e) => {
                                    const newBid = {...this.state.bid, message: e.target.value}
                                    this.setState({ bid: newBid})
                                }}/>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className="d-flex justify-content-end">
                    <button className="btn btn-primary" onClick={this.update}>Update</button>
                </ModalFooter>
            </Modal>
        )
    }
}



export default EditBidDlg
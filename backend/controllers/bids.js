const fs = require('fs');
const util = require('util');
const path = require('path');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


exports.retrieve = async (req, res, next) => {

    try {

        const bids = await readBids()

        return res.status(200).json({ data: bids.filter(bid => bid.shipmentId === req.query.shipmentId) })

    } catch (error) {

        next(error)
    }
}

exports.create = async (req, res, next) => {

    try {

        const bids = await readBids()

        bids.unshift({ ...req.body });

        writeFile(path.join(__dirname, '../utils/bids.json'), JSON.stringify(bids));

        return res.status(200).json({ message: 'Bid created' })

    } catch (error) {

        next(error)
    }
}

exports.update = async (req, res, next) => {

    try {

        const bids = await readBids()

        const index = bids.find(bid => bid.id === req.body.id)

        bids[index].price = req.body.price;

        bids[index].message = req.body.message;

        console.log(bids)

        writeFile(path.join(__dirname, '../utils/bids.json'), JSON.stringify(bids));

        return res.status(200).json({ message: 'Bid updated' })

    } catch (error) {

        next(error)
    }
}

exports.delete = async (req, res, next) => {

    try {

        const bids = await readBids()

        const index = bids.find(bid => bid.id === req.params.id)

        bids.splice(index, 1)

        writeFile(path.join(__dirname, '../utils/bids.json'), JSON.stringify(bids));

        return res.status(200).json({ message: 'Bid removed' })

    } catch (error) {

        next(error)
    }
}

const readBids = async() => {

    const data = await readFile(path.join(__dirname, '../utils/bids.json'), 'utf8');

    if (!data) return [];

    return JSON.parse(data);
}

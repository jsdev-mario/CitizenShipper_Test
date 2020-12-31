const fs = require('fs');
const util = require('util');
const path = require('path');
const readFile = util.promisify(fs.readFile);

exports.read = async (req, res, next) => {

    try {

        const shipments = await readShipments()
        
        return res.status(200).json({data: shipments.find(shipment => shipment.id === req.params.id)})

    } catch (error) {
        
        next(error)
    }
}

exports.retrieve = async (req, res, next) => {

    try {

        const shipments = await readShipments()

        return res.status(200).json({ data: shipments })

    } catch (error) {

        next(error)
    }
}

const readShipments = async() => {

    const data = await readFile(path.join(__dirname, '../utils/shipments.json'), 'utf8');

    if (!data) return [];

    return JSON.parse(data);
  }

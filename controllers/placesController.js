const Place = require('../Models/placesModel')

exports.getPlace= async(req, res) =>{
    try {
        const tags = req.query.tags.split(',')
        const doc = await Place.find({parameters: {$all: tags}})
        res.status(200).json({
            status: 'Success',
            result: doc.length,
            data: {
                doc
            }
        })
    } catch (error) {
        res.status(404).json({
            status:"fail",
            message: error.message
        })
    }
    
}
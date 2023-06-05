const Place = require("../Models/placesModel");

exports.getPlace = async (req, res) => {
  try {
    const { type, temperature, flight } = req.query;
    const filter = {};

    if (type || temperature || flight) {
      filter.tags = {};

      if (type) {
        filter.tags.$in = [type];
      }

      if (temperature) {
        filter.tags.$in = [...(filter.tags.$in || []), temperature];
      }

      if (flight) {
        filter.tags.$in = [...(filter.tags.$in || []), flight];
      }

      filter.tags.$all = filter.tags.$in;
      delete filter.tags.$in;
    }

    // Fetch the filtered place based on the filter object
    const doc = await Place.findOne(filter);
    if (doc.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No place was found sorry",
      });
    }
    res.status(200).json({
      status: "Success",
      result: doc.length,
      data: {
        doc,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};


exports.creatPlace = async(req, res) => {
  try {

    const { name, description, imageUrl, type, temperature, flight} = req.body;
    
    const tags = [type, temperature, flight]

    // Validate the required fields
    if (!name || !description || !imageUrl || tags.length===0 ) {
      return res.status(400).json({ error: 'Please provide all the required fields' });
    }
    const doc = await Place.create({ name, description, imageUrl, tags})
    res.redirect('/')
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }

}
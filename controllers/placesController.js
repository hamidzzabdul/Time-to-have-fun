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

    // Fetch all places that match the filter
    const places = await Place.find(filter);

    if (places.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No place was found.",
      });
    }

    // If user selects only one tag and submits multiple times, return a different place each time
    if (Object.keys(filter.tags).length === 1) {
      const randomIndex = Math.floor(Math.random() * places.length);
      const doc = places[randomIndex];

      return res.status(200).json({
        status: "success",
        result: 1,
        data: {
          doc,
        },
      });
    }

    // Return the first matching place
    const doc = places[0];
    return res.status(200).json({
      status: "success",
      result: 1,
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

    const { name, description, imageUrl, Visited, type, temperature, flight} = req.body;
    
    const tags = [type, temperature, flight]
    console.log(req.body)
    // Validate the required fields
    if (!name || !description || !imageUrl || tags.length===0 ) {
      return res.status(400).json({ error: 'Please provide all the required fields' });
    }
    const doc = await Place.create({ name, description, imageUrl, Visited ,tags})
    res.redirect('/')
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }

}
const Place = require("../Models/placesModel");

exports.getOverview = async (req, res) => {
  try {
    
    // all places
    const docs = await Place.find();

    res.status(200).render("overview", {
      places: docs,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

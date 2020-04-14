const Artist = require("./model");

const artistsControllers = {
  // GET ALL ARTISTS
  getAll: async (req, res) => {
    const artists = await Artist.find();

    res.status(200).send({
      message: "Get all artists",
      artists,
    });
  },
};

module.exports = artistsControllers;

const artistsControllers = {
  // GET ALL ARTISTS
  getAll: async (req, res) => {
    res.status(200).send({
      message: "Get all artists",
    });
  },
};

module.exports = artistsControllers;

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

  add: async (req, res) => {
    try {
      const newArtist = {
        ...req.body,
        slug: req.body.name.split(" ").join("-").toLowerCase(),
      };

      const artist = await Artist.create(newArtist);

      res.status(200).send({
        message: "Add artist",
        artist,
      });
    } catch (error) {
      res.status(400).send({
        error,
      });
    }
  },

  deleteAll: async (req, res) => {
    try {
      await Artist.deleteMany();
      res.status(200).send({
        message: "Deleted all artists",
      });
    } catch (error) {
      res.status(400).send({
        error,
      });
    }
  },

  getOneBySlug: async (req, res) => {
    try {
      const slug = req.params.slug;

      const artist = await Artist.findOne({ slug });

      res.status(200).send({
        artist,
      });
    } catch (error) {
      res.status(400).send({
        error,
      });
    }
  },
  deleteOneBySlug: async (req, res) => {
    try {
      const slug = req.params.slug;
      const result = await Artist.deleteOne({ slug });
      res.status(200).send({
        result,
      });
    } catch (error) {
      res.status(400).send({
        error,
      });
    }
  },
};

module.exports = artistsControllers;

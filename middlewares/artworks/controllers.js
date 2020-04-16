const Artwork = require("./model");

const artworksControllers = {
  getAll: async (req, res) => {
    const artworks = await Artwork.find();

    res.status(200).send({
      message: "Get all artworks",
      artworks,
    });
  },

  add: async (req, res) => {
    try {
      const newArtwork = {
        ...req.body,
        slug: req.body.name.split(" ").join("-").toLowerCase(),
      };

      const artwork = await Artwork.create(newArtwork);

      res.status(200).send({
        message: "Add artwork",
        artwork,
      });
    } catch (error) {
      res.status(400).send({
        error,
      });
    }
  },

  deleteAll: async (req, res) => {
    try {
      await Artwork.deleteMany();
      res.status(200).send({
        message: "Deleted all artworks",
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

      const artwork = await Artwork.findOne({ slug });

      res.status(200).send({
        artwork,
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
      const result = await Artwork.deleteOne({ slug });
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

module.exports = artworksControllers;

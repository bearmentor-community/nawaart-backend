const Artwork = require("./model");
const Artist = require("../artists/model");
const artworksSeed = require("./seed.json");

const artworksControllers = {
  seed: async (req, res) => {
    try {
      artworksSeed.forEach(async (artwork) => {
        const artist = await Artist.findOne({ slug: artwork.artistSlug });

        if (!artist) {
          console.info("There is no artist");
          res.status(500).send({
            message: "Seed artworks failed because artist is not found",
          });
        } else {
          const newArtwork = {
            ...artwork,
            artist: artist._id,
            imageUrl: process.env.API_URL + artwork.imageUrl,
            slug: artwork.title.split(" ").join("-").toLowerCase(),
          };

          try {
            // Create the artwork first so we can get the artwork._id
            // We cannot use await Artwork.create(newArtwork)
            const artwork = new Artwork(newArtwork);
            await artwork.save();

            try {
              // Then we do Artist.artworks.push(artwork._id)
              await Artist.findByIdAndUpdate(
                artist._id, // finding the artist id first
                { $push: { artworks: artwork._id } } // then push the artwork id into artworks property
              );
            } catch (error) {
              res.status(500).send({
                message: "Seed artworks when updating Artist.artworks failed",
              });
            }
          } catch (error) {
            res.status(500).send({
              message: "Seed artworks when adding new artwork failed",
            });
          }
        }
      });

      // Do this after all the forEach loop finished
      res.status(201).send({
        message: "Seed artworks completed",
      });
    } catch (error) {
      res.status(500).send({
        message: "Seed artworks failed",
      });
    }
  },

  getAll: async (req, res) => {
    const artworks = await Artwork.find();

    res.status(200).send({
      message: "Get all artworks",
      artworks,
    });
  },

  add: async (req, res) => {
    console.log(req.body);
    try {
      const newArtwork = {
        title: req.body.title,
        slug: req.body.title.split(" ").join("-").toLowerCase(),
        artist: req.body.artistId,
        imageUrl: `${process.env.API_URL}/uploads/${req.file.filename}`,
      };

      console.log(newArtwork);
      const artwork = await Artwork.create(newArtwork);

      res.status(200).send({
        message: "Add artwork",
        artwork,
      });
    } catch (error) {
      res.status(400).send({
        message: "Failed to add artwork",
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

      const artwork = await Artwork.findOne({ slug }).populate({
        path: "artist",
        select: "name slug photo -_id",
      });

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

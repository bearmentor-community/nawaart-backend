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
  addArtist: async (req, res) => {
    const artist = await Artist.create({
      slug: "aung-ko",
      name: "Aung Ko",
      photo:
        "https://rivergallerymyanmar.com/public/storage/artists/November2019/Tu7zFZyISCjGsfMbB7YB.jpg",
      biography: {
        about:
          "Born in Htone Bo, Myanmar in 1980.2002 Educated from University of Culture, Yangon.",
        exhibitions: [
          "2018 “Perupa Muda#3 Ring Road”, Sangkring Art Space, Yogyakarta",
          "2018 “Imagine Beauty”, Sunrise Art Gallery & Arcade, Fairmont Hotel, Jakarta",
          "2018 “Imagine Beauty”, Sunrise Art Gallery & Arcade, Fairmont Hotel, Jakarta",
        ],
      },
    });

    res.status(200).send({
      message: "Add artist",
      artist,
    });
  },
};

module.exports = artistsControllers;

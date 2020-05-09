const mongoose = require("../../config/mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

// Artwork schema
const ArtworkSchema = Schema(
  {
    artist: {
      type: mongoose.Types.ObjectId,
      ref: "Artist",
      required: [true, "Artist's _id is required"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      min: [2, "Title is too short"],
      max: [100, "Title is too long"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
  },
  {
    timestamps: true,
  }
);

ArtworkSchema.plugin(AutoIncrement, {
  id: "artworks_counter",
  inc_field: "id",
});

const Artwork = mongoose.model("Artwork", ArtworkSchema);

module.exports = Artwork;

const mongoose = require("../../config/mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

// Artist schema
const ArtistSchema = Schema(
  {
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      min: [2, "Name is too short"],
      max: [100, "Name is too long"],
      unique: true,
    },
    photoUrl: {
      type: String,
      required: [true, "Photo URL is required"],
    },
    biography: {
      about: {
        type: String,
        required: [true, "About is required"],
      },
      exhibitions: {
        type: [String],
        required: [true, "Exhibitions are required"],
      },
    },
    artworks: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Artwork",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// plug the AutoIncrement plugin into the schema to create auto incremented id
// id is different with _id
// inc_field is to track which id to increment
ArtistSchema.plugin(AutoIncrement, {
  id: "artists_counter",
  inc_field: "id",
});

ArtistSchema.plugin(uniqueValidator);

// Artist model => artist collection
const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;

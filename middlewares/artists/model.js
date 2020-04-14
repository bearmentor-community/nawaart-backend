const mongoose = require("../../config/mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

// Artist schema
const ArtistSchema = Schema(
  {
    slug: {
      type: String,
      required: [true, "Slug is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      min: [2, "Name is too short"],
      max: [100, "Name is too long"],
    },
    photo: {
      type: String,
      required: [true, "Photo is required"],
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

// Artist model => artist collection
const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;

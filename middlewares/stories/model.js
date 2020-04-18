const mongoose = require("../../config/mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

// Story schema
const StorySchema = Schema(
  {
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
    date: {
      type: String,
      required: [true, "Date is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
  },
  {
    timestamps: true,
  }
);

StorySchema.plugin(AutoIncrement, {
  id: "stories_counter",
  inc_field: "id",
});

const Story = mongoose.model("Story", StorySchema);

module.exports = Story;

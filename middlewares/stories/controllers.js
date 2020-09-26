const Story = require("./model");
const storiesSeed = require("./seed.json");

const storiesControllers = {
  seed: async (req, res) => {
    try {
      storiesSeed.forEach(async (story) => {
        try {
          const newStory = {
            ...story,
            imageUrl: process.env.API_URL + story.imageUrl,
            slug: story.slug || story.title.split(" ").join("-").toLowerCase(),
          };
          await Story.create(newStory);
        } catch (error) {
          res.status(201).send({
            message: "Seed stories process failed",
          });
        }
      });

      res.status(201).send({
        message: "Seed stories completed",
      });
    } catch (error) {
      res.status(500).send({
        message: "Seed stories failed",
      });
    }
  },

  getAll: async (req, res) => {
    const stories = await Story.find();

    res.status(200).send({
      message: "Get all stories",
      stories,
    });
  },

  add: async (req, res) => {
    try {
      const newStory = {
        ...req.body,
        slug: req.body.title.split(" ").join("-").toLowerCase(),
      };
      const story = await Story.create(newStory);

      res.status(200).send({
        message: "Add story",
        story,
      });
    } catch (error) {
      res.status(400).send({
        message: "Failed to add story",
        error,
      });
    }
  },

  deleteAll: async (req, res) => {
    try {
      await Story.deleteMany();
      res.status(200).send({
        message: "Deleted all stories",
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

      const story = await Story.findOne({ slug });
      if (!story) throw new Error("No story found");

      res.status(200).send({
        story,
      });
    } catch (error) {
      res.status(404).send({
        error,
      });
    }
  },

  deleteOneBySlug: async (req, res) => {
    try {
      const slug = req.params.slug;
      const result = await Story.deleteOne({ slug });
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

module.exports = storiesControllers;

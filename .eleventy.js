const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  return {
    dir: {
<<<<<<< HEAD
      input: "src",
<<<<<<< Updated upstream
      output: "public"
=======
      layouts: "_layouts"
>>>>>>> Stashed changes
=======
      input: "src"
>>>>>>> 9c0887b (templates nunjuck)
    }
  }
};

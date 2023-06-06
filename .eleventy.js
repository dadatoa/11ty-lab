const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  return {
    dir: {
<<<<<<< HEAD
<<<<<<< HEAD
      input: "src"
=======
=======
>>>>>>> 1464752 (templates nunjuck)
      input: "src",
<<<<<<< Updated upstream
      output: "public"
=======
      layouts: "_layouts"
>>>>>>> Stashed changes
<<<<<<< HEAD
>>>>>>> 581fcaa (ajoute layout nunchucks)
=======
=======
      input: "src"
>>>>>>> 9c0887b (templates nunjuck)
>>>>>>> 1464752 (templates nunjuck)
    }
  }
};

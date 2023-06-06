const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  return {
    dir: {
      input: "src",
      layouts: "_layouts"
    }
  };
}

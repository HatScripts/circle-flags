module.exports = {
  floatPrecision: 1,
  multipass: true,
  plugins: [
    "removeDimensions",
    {
      name: "removeViewBox",
      active: false,
    },
    "removeRasterImages",
    "sortAttrs",
    {
      name: "removeAttrs",
      params: {
        attrs: ["font.*", "opacity", "paint.*", "stroke.*", "text.*"],
      },
    },
    "removeStyleElement",
    "removeScriptElement",
    {
      name: "convertPathData",
      params: {
        noSpaceAfterFlags: false,
      },
    },
    {
      name: "mergePaths",
      params: {
        noSpaceAfterFlags: false,
      },
    },
  ],
};

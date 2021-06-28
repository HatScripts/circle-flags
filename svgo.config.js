module.exports = {
  multipass: true,
  floatPrecision: 1,
  plugins: [
    {
      name: 'removeViewBox',
      active: false
    },
    {
      name: 'removeRasterImages',
      active: true
    },
    {
      name: 'sortAttrs',
      active: true
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: '(color|font|opacity|paint|stroke|text).*'
      }
    },
    {
      name: 'removeStyleElement',
      active: true
    },
    {
      name: 'removeScriptElement',
      active: true
    },
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'cleanupAttrs',
    'mergeStyles',
    'inlineStyles',
    'minifyStyles',
    'cleanupIDs',
    'removeUselessDefs',
    'cleanupNumericValues',
    'convertColors',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'cleanupEnableBackground',
    'removeHiddenElems',
    'removeEmptyText',
    'convertShapeToPath',
    'convertEllipseToCircle',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    'convertPathData',
    'convertTransform',
    'removeEmptyAttrs',
    'removeEmptyContainers',
    'mergePaths',
    'removeUnusedNS',
    'sortDefsChildren',
    'removeTitle',
    'removeDesc'
  ]
}

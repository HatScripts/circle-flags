"use strict";

const fs = require("fs");
const path = require("path");
const xmlb = require("xmlbuilder2");
const SVGO = require("svgo");

const svgoOptions = {
  floatPrecision: 1,
  multipass: true,
  plugins: [
    { cleanupAttrs: true },
    { removeDimensions: true },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { removeStyleElement: true },
    { removeScriptElement: true },
    { convertPathData: { noSpaceAfterFlags: false } },
    { mergePaths: { noSpaceAfterFlags: false } },
    { removeViewBox: false },
    { cleanupEnableBackground: true },
    { convertStyleToAttrs: true },
    { convertColors: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeUnusedNS: true },
    { cleanupIDs: true },
    { cleanupNumericValues: true },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { removeRasterImages: true },
    { mergePaths: true },
    { convertShapeToPath: true },
    { sortAttrs: true },
    { removeDimensions: true },
    { removeAttrs: { attrs: "(font.*|opacity|paint.*|text.*|stroke.*)" } },
  ],
};

function traverseDir(dirname, f) {
  fs.readdirSync(dirname).forEach((name) => {
    const fullPath = path.join(dirname, name);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      traverseDir(fullPath, f);
    } else if (stat.isFile()) {
      f(fullPath);
    }
  });
}

function getAvailableIcons(dir) {
  const icons = [];
  try {
    traverseDir(dir, (fp) => {
      if (fp.match(/^.*\.svg$/)) {
        icons.push({
          filepath: fp,
          countryCode: path.basename(fp).slice(0, -4),
        });
      }
    });
  } catch (e) {
    if (e.countryCode === "ENOENT" || e.countryCode === "ENOTDIR") {
      throw new Error("Source directory does not exist.");
    } else {
      throw e;
    }
  }
  return icons;
}

function SVGParsingError(msg) {
  this.message = msg;
}

function minify(svgstr) {
  return new Promise((resolve, reject) => {
    new SVGO(svgoOptions)
      .optimize(svgstr)
      .then((result) => resolve(result.data))
      .catch((err) => reject(new SVGParsingError(err)));
  });
}

// propsMatchingPattern returns an object containing only those of obj's
// properties whose names match the regular expression.
const propsMatchingPattern = (obj, pattern) =>
  Object.getOwnPropertyNames(obj)
    .filter((p) => p.match(pattern))
    .reduce((acc, p) => ({ ...acc, [p]: obj[p] }), {});

// applyMask inserts a <mask> element under the document's root and moves
// everything else into a <g> with the mask applied. Returns a Promise.
//
// The result is an SVG string that follows the form:
//
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//   <mask id="m">
//     <circle cx="256" cy="256" r="256" fill="#fff"/>
//   </mask>
//   <g mask="url(#m)">
//     <!-- masked content -->
//   </g>
// </svg>
//
function applyMask(svgstr, cornerRadius = "50%") {
  return new Promise((resolve, reject) => {
    try {
      const obj = xmlb.create(svgstr).end({ format: "object" });
      const r = parseInt(cornerRadius);
      const id = "ci---mask---";

      const maskShape =
        r === 50
          ? {
              circle: {
                "@cx": "256",
                "@cy": "256",
                "@r": "256",
                "@fill": "#fff",
              },
            }
          : {
              rect: {
                "@width": "512",
                "@height": "512",
                "@rx": `${r}%`,
                "@fill": "#fff",
              },
            };

      const masked = {
        svg: {
          ...propsMatchingPattern(obj.svg, /^@/),
          "#": [
            { mask: { "@id": id, ...maskShape } },
            {
              g: {
                "@mask": `url(#${id})`,
                ...propsMatchingPattern(obj.svg, /^[#a-zA-Z]/),
              },
            },
          ],
        },
      };

      resolve(xmlb.create(masked).end({ format: "xml", headless: true }));
    } catch (e) {
      reject(new SVGParsingError(e.message));
    }
  });
}

function validateCornerRadius(r) {
  if (!r.match(/^\d{1,2}%?$/) || parseInt(r) < 0 || parseInt(r) > 50) {
    throw new Error(
      "Corner radius must be a percentage within the 0-50% range."
    );
  }
}

function getBuildOptions() {
  const config = {
    srcDir: process.env.SRC_DIR || "src",
    buildDir: process.env.BUILD_DIR || "build",
    cornerRadius: process.env.CORNER_RADIUS || "50%",
  };
  validateCornerRadius(config.cornerRadius);
  return config;
}

const makeDestPath = (icon, options) =>
  path.join(options.buildDir, path.relative(options.srcDir, icon.filepath));

async function buildIcon(icon, options) {
  try {
    const dest = makeDestPath(icon, options);
    const data = await fs.promises.readFile(icon.filepath, "utf8");
    const masked = await applyMask(data, options.cornerRadius);
    const minified = await minify(masked);
    await fs.promises.mkdir(path.dirname(dest), { recursive: true });
    await fs.promises.writeFile(dest, minified);
  } catch (e) {
    if (e instanceof SVGParsingError) {
      throw new SVGParsingError(`${icon.filepath}: ${e.message}`);
    } else {
      throw e;
    }
  }
}

async function build(countryCodes = [], options) {
  const all = getAvailableIcons(options.srcDir);
  const cc = [...new Set(countryCodes)].map((c) => c.toLowerCase());

  const notFound = cc.filter((c) => !all.find((f) => f.countryCode === c));
  if (notFound.length)
    throw new Error(`Icon(s) not found: ${notFound.join(", ")}`);

  const icons = cc.length ? all.filter((i) => cc.includes(i.countryCode)) : all;
  for (const [i, icon] of icons.entries()) {
    await buildIcon(icon, options);
    console.log(`(${i + 1}/${icons.length}) ${makeDestPath(icon, options)}`);
  }
}

function main() {
  const handleErr = (e) => {
    console.error(e.message);
    process.exit(1);
  };

  try {
    const countryCodes = process.argv.slice(2);
    const options = getBuildOptions();
    build(countryCodes, options).catch((e) => handleErr(e));
  } catch (e) {
    handleErr(e);
  }
}

if (require.main === module) {
  main();
}

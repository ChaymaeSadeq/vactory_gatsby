const fs = require("fs");
const postcss = require("postcss");
const CleanCSS = require("clean-css");
const atImport = require("postcss-import");
var rimraf = require('rimraf')
const postcssNested = require("postcss-nested")
const autoprefixer = require("autoprefixer")
const tailwind = require("tailwindcss");
const tailwindConfig = require("./tailwind.config.js");
const tailwindInstance = tailwind(tailwindConfig)

// Files.
const inputFile = './src/styles.css';
const outputFile = './styles.css';
const outputFileMap = './styles.css.map';
const outputFileMin = './styles.min.css';

// Build.
function buildDistFile() {
  rimraf.sync(outputFile)
  rimraf.sync(outputFileMap)
  rimraf.sync(outputFileMin)

  return new Promise((resolve, reject) => {
    console.log(`Processing ./src/styles.css...`);

    fs.readFile(inputFile, (err, css) => {
      if (err) throw err;

      return postcss([
        atImport,
        tailwindInstance,
        postcssNested,
        autoprefixer,
      ])
        .use(atImport())
        .process(css, {
          from: inputFile,
          to: outputFile,
        })
        .then((result) => {
          fs.writeFileSync(outputFile, result.css);
          if ( result.map ) {
            fs.writeFileSync(outputFileMap, result.map)
          }
          return result;
        })
        .then((result) => {
          const minified = new CleanCSS({level: 1}).minify(result.css);
          fs.writeFileSync(outputFileMin, minified.styles);
        })
        .then(resolve)
        .catch((error) => {
          console.log(error);
          reject();
        });
    });
  });
}

// Start.
console.info("Building Tailwind!");
process.env.NODE_ENV && console.info(`running in ${process.env.NODE_ENV} env.`);

Promise.all([buildDistFile()]).then(() => {
  console.log("Finished Building Tailwind!");
});

# circle-flags <img src="logo.svg" alt="circle-flags animated logo" align="right">

A collection of circular SVG country flags.

## Usage

```text
https://hatscripts.github.io/circle-flags/flags/xx.svg
```

(Where `xx` is the [ISO 3166-1 alpha-2 code](https://www.iso.org/obp/ui/#search/code/) of a country).

For example, the following code:

```html
<img src="https://hatscripts.github.io/circle-flags/flags/br.svg" width="48" />
<img src="https://hatscripts.github.io/circle-flags/flags/cn.svg" width="48" />
<img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" width="48" />
<img src="https://hatscripts.github.io/circle-flags/flags/id.svg" width="48" />
<img src="https://hatscripts.github.io/circle-flags/flags/in.svg" width="48" />
<img src="https://hatscripts.github.io/circle-flags/flags/ng.svg" width="48" />
<img src="https://hatscripts.github.io/circle-flags/flags/ru.svg" width="48" />
<img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="48" />
```

...produces this:<br/><br/> <img src="https://hatscripts.github.io/circle-flags/flags/br.svg" width="48"> <img src="https://hatscripts.github.io/circle-flags/flags/cn.svg" width="48"> <img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" width="48"> <img src="https://hatscripts.github.io/circle-flags/flags/id.svg" width="48"> <img src="https://hatscripts.github.io/circle-flags/flags/in.svg" width="48"> <img src="https://hatscripts.github.io/circle-flags/flags/ng.svg" width="48"> <img src="https://hatscripts.github.io/circle-flags/flags/ru.svg" width="48"> <img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="48">

To view all the available flags, check [the gallery](https://hatscripts.github.io/circle-flags/gallery).

### React

If you're using [React](https://reactjs.org), you may want to try the [react-circle-flags](https://www.npmjs.com/package/react-circle-flags) package.

### SolidJS

If you're using [SolidJS](https://www.solidjs.com/), you may want to try the [solid-circle-flags](https://www.npmjs.com/package/solid-circle-flags) package.

### NPM

If you want to install this package as a dependency, you can install it from this GitHub repository:

```sh
npm install --save https://github.com/HatScripts/circle-flags
```

### Userscripts

- [Google Translate: Filter & Flags](https://github.com/HatScripts/google-translate-filter-and-flags) - Filters languages and shows country flags on Google Translate
- [Wiktionary: Filter & Flags](https://github.com/HatScripts/wiktionary-filter-and-flags) - Filters languages and shows country flags on Wiktionary

### Custom builds

You can create a customized build by running the included script:

```
$ npm install
$ CORNER_RADIUS=25% npm run build
```

This will generate flags with rounded corners instead of the default circle. The files will appear in the `build/` directory.

To build only selected icons, pass their codes as arguments:

```
$ CORNER_RADIUS=25% npm run build gb us ca
```

The following environment variables are currently recognized:

| Variable        | Default value  |
| --------------- | -------------- |
| `SRC_DIR`       | `src/`         |
| `BUILD_DIR`     | `build/`       |
| `CORNER_RADIUS` | `50%` (circle) |

## Contributing

To contribute, clone the repository and install the dependencies:

```
$ git clone https://github.com/HatScripts/circle-flags.git
$ cd circle-flags/
$ npm install
```

Edit the relevant SVG files under `src/`, then run the build script on them, e.g.:

```
$ npm run build us ru cn
```

The files will appear under `build/`. Check if everything looks good, then move the files into `flags/`.

It's likely that your editor inflated the source files considerably—it's a good idea to prettify them before proceeding (requires [svgo](https://github.com/svg/svgo) >=1.2.0):

```
$ svgo --config=svgo.yml --recursive --pretty --indent=2 src/
```

Commit the changes and submit them as a pull request.

### The color palette

Submitted flags should conform to the following color palette.<br/> Try to match the flag's original colors with the nearest color from the palette.

- `#eeeeee`: white
- `#acabb1`: gray
- `#333333`: black
- `#a2001d`: dark red
- `#d80027`: red
- `#ff9811`: orange
- `#ffda44`: yellow
- `#6da544`: green
- `#496e2d`: dark green
- `#338af3`: light blue
- `#0052b4`: blue

Special cases:

- `#002266`: dark blue (only one usage: [<img src="https://hatscripts.github.io/circle-flags/flags/td.svg" width="16"> Chad](https://github.com/HatScripts/circle-flags/blob/gh-pages/flags/td.svg), to differentiate from [<img src="https://hatscripts.github.io/circle-flags/flags/ro.svg" width="16"> Romania](https://github.com/HatScripts/circle-flags/blob/gh-pages/flags/ro.svg))
- `#4a1f63`: purple (only one usage: [<img src="https://hatscripts.github.io/circle-flags/flags/es-ib.svg" width="16"> Balearic Islands](https://github.com/HatScripts/circle-flags/blob/gh-pages/flags/es-ib.svg))
- `#751a46`: dark pink (only one usage: [<img src="https://hatscripts.github.io/circle-flags/flags/qa.svg" width="16"> Qatar](https://github.com/HatScripts/circle-flags/blob/gh-pages/flags/qa.svg))

## License

This project is released under the [MIT license](LICENSE.md).

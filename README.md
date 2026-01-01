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

### React Native / Expo

If you're using [React Native / Expo](https://reactnative.dev/), you may want to try the [react-native-circle-flags](https://www.npmjs.com/package/react-native-circle-flags) package.

### SolidJS

If you're using [SolidJS](https://www.solidjs.com/), you may want to try the [solid-circle-flags](https://www.npmjs.com/package/solid-circle-flags) package.

### NPM

If you want to install this package as a dependency, you can install it from this GitHub repository:

```sh
npm install --save https://github.com/HatScripts/circle-flags
```

### 📜 Userscripts

- [Google Translate: Filter & Flags](https://github.com/HatScripts/google-translate-filter-and-flags) - Filters languages and shows country flags on Google Translate
- [Wiktionary: Filter & Flags](https://github.com/HatScripts/wiktionary-filter-and-flags) - Filters languages and shows country flags on Wiktionary

## 🚀 Contributing

To contribute, you need to have the latest version of [svgo](https://github.com/svg/svgo) installed.

First, edit the relevant SVG files in the `flags/` directory.

Then run `svgo` to optimize the SVG files:

```sh
svgo ./flags --recursive --config=svgo.config.js
```

Then commit the changes, and submit them as a pull request.

### 🎨 The color palette

Submitted flags should conform to the following color palette.<br/> Try to match the flag's original colors with the nearest color from the palette.

- <img src="https://placeholder.pics/svg/16x16/eeeeee/eeeeee"/> `#eeeeee`: white
- <img src="https://placeholder.pics/svg/16x16/acabb1/acabb1"/> `#acabb1`: gray
- <img src="https://placeholder.pics/svg/16x16/333333/333333"/> `#333333`: black
- <img src="https://placeholder.pics/svg/16x16/a2001d/a2001d"/> `#a2001d`: dark red
- <img src="https://placeholder.pics/svg/16x16/d80027/d80027"/> `#d80027`: red
- <img src="https://placeholder.pics/svg/16x16/ff9811/ff9811"/> `#ff9811`: orange
- <img src="https://placeholder.pics/svg/16x16/ffda44/ffda44"/> `#ffda44`: yellow
- <img src="https://placeholder.pics/svg/16x16/6da544/6da544"/> `#6da544`: green
- <img src="https://placeholder.pics/svg/16x16/496e2d/496e2d"/> `#496e2d`: dark green
- <img src="https://placeholder.pics/svg/16x16/338af3/338af3"/> `#338af3`: light blue
- <img src="https://placeholder.pics/svg/16x16/0052b4/0052b4"/> `#0052b4`: blue

Special cases:

- <img src="https://placeholder.pics/svg/16x16/002266/002266"> `#002266`: dark blue (only two usages: [<img src="https://hatscripts.github.io/circle-flags/flags/td.svg" width="16"> Chad](https://github.com/HatScripts/circle-flags/blob/gh-pages/flags/td.svg), to differentiate from [<img src="https://hatscripts.github.io/circle-flags/flags/ro.svg" width="16"> Romania](https://github.com/HatScripts/circle-flags/blob/gh-pages/flags/ro.svg); and [<img src="https://hatscripts.github.io/circle-flags/flags/aq-true_south.svg" width="16"> True South (Antarctica)](https://github.com/HatScripts/circle-flags/blob/gh-pages/flags/aq-true_south.svg))
- <img src="https://placeholder.pics/svg/16x16/4a1f63/4a1f63"> `#4a1f63`: purple (only one usage: [<img src="https://hatscripts.github.io/circle-flags/flags/es-ib.svg" width="16"> Balearic Islands](https://github.com/HatScripts/circle-flags/blob/gh-pages/flags/es-ib.svg))
- <img src="https://placeholder.pics/svg/16x16/751a46/751a46"> `#751a46`: dark pink (only one usage: [<img src="https://hatscripts.github.io/circle-flags/flags/qa.svg" width="16"> Qatar](https://github.com/HatScripts/circle-flags/blob/gh-pages/flags/qa.svg))

## 🧾 License

This project is released under the [MIT license](LICENSE.md).

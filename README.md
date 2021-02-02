# circle-flags

A collection of circular SVG country flags.

## Usage

```
https://hatscripts.github.io/circle-flags/flags/xx.svg
```
(Where `xx` is the [ISO 3166-1 alpha-2 code](https://www.iso.org/obp/ui/#search/code/) of a country).

For example, the following code:
```html
<img src="https://hatscripts.github.io/circle-flags/flags/br.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/ca.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/jp.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/mx.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/za.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/za.svg" width="48">
```

...produces this:<br/><br/>
<img src="https://hatscripts.github.io/circle-flags/flags/br.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/ca.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/jp.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/mx.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/za.svg" width="48">

To view all the available flags, check [the gallery](https://hatscripts.github.io/circle-flags/all-flags.html).

### React

If you're using [React](https://reactjs.org), you may want to try the
[react-circle-flags](https://www.npmjs.com/package/react-circle-flags) package.

### NPM

If you want to install this package as dependency, you can install it from this GitHub repository:

```
npm install --save https://github.com/HatScripts/circle-flags
```

## Contributing

To contribute, you need to have [svgo](https://github.com/svg/svgo) installed
(version 1.2.0 or newer).

First, edit the relevant SVG files in the `flags/` directory.

Then run `svgo` to optimize the SVG files:

```sh
svgo ./flags --recursive --config=svgo.yml
```

Then commit the changes, and submit them as a pull request.

## License

This project is released under the [MIT license](LICENSE).

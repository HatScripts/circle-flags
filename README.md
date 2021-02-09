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

## License

This project is released under the [MIT license](LICENSE).

# @icon/boxicons-solid

[![npm version](https://img.shields.io/npm/v/@icon/boxicons-solid.svg)](https://www.npmjs.org/package/@icon/boxicons-solid)

This repository is a module of the full [standard-icons][standard-icons] repository.

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `@icon/boxicons-solid` with this command.

```bash
npm install --save @icon/boxicons-solid
```

## Usage

There are many ways/formats of how to use boxicons-regular. The fastest and recommended way is via SVG directly. Or use the webfont version if you want to include all icons at once:

### SVG icons -- when you need just a few icons in your project

1 . If you want to use just a few icons. Find the icons you need in "icons" folder. Then use them as regular images:

```
<img height="32" width="32" src="@icon/boxicons-solid/icons/alarm.svg" />
```

2 . Icons can be served from a CDN such as [Unpkg][Unpkg]. Simply use the `@icon/boxicons-solid` npm package in the URL like the following:

```
<img height="32" width="32" src="https://unpkg.com/@icon/boxicons-solid/icons/alarm.svg" />
```

### Icons font -- ideal when you want to include all icons at once

1 . Install `@icon/boxicons-solid` with this command. In the `<head>` of your html, reference the location to your `boxicons-regular.css`.

```
<head>
...
<link rel="stylesheet" href="@icon/boxicons-solid/boxicons-regular.css">
...
</head>
```

2 . Use [unpkg.com][Unpkg] to load directly boxicons-regular without installing anything:

```
<head>
...
<link rel="stylesheet" href="https://unpkg.com/@icon/boxicons-solid/boxicons-regular.css">
...
</head>
```

> Place boxicons-regular with `<i>` tag in your html like this. Icon class names are to be used with the `bxs` class prefix.

```
<i class="bxs bxs-alarm"></i>
```


## Bugs, Ideas, Pull Requests

If you have any ideas or found bugs, please send me Pull Requests or let me know with [GitHub Issues][github issues].

## License

boxicons-regular is copyright by Atisa, licensed under the [MIT][license].

[MIT]: https://opensource.org/licenses/MIT
[SIL]: http://scripts.sil.org/OFL
[standard-icons]: https://github.com/thecreation/standard-icons
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
[github issues]: https://github.com/thecreation/standard-icons/issues
[Unpkg]: https://unpkg.com
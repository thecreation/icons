# @icon/openwebicons

[![npm version](https://img.shields.io/npm/v/@icon/openwebicons.svg)](https://www.npmjs.org/package/@icon/openwebicons)

This repository is a module of the full [standard-icons][standard-icons] repository.

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `@icon/openwebicons` with this command.

```bash
npm install --save @icon/openwebicons
```

## Usage

There are many ways/formats of how to use openwebicons. The fastest and recommended way is via SVG directly. Or use the webfont version if you want to include all icons at once:

### SVG icons -- when you need just a few icons in your project

1 . If you want to use just a few icons. Find the icons you need in "icons" folder. Then use them as regular images:

```
<img height="32" width="32" src="@icon/openwebicons/icons/airplane.svg" />
```

2 . Icons can be served from a CDN such as [Unpkg][Unpkg]. Simply use the `@icon/openwebicons` npm package in the URL like the following:

```
<img height="32" width="32" src="https://unpkg.com/@icon/openwebicons/icons/airplane.svg" />
```

### Icons font -- ideal when you want to include all icons at once

1 . Install `@icon/openwebicons` with this command. In the `<head>` of your html, reference the location to your `openwebicons.css`.

```
<head>
...
<link rel="stylesheet" href="@icon/openwebicons/openwebicons.css">
...
</head>
```

2 . Use [unpkg.com][Unpkg] to load directly openwebicons without installing anything:

```
<head>
...
<link rel="stylesheet" href="https://unpkg.com/@icon/openwebicons/openwebicons.css">
...
</head>
```

> Place openwebicons with `<i>` tag in your html like this. Icon class names are to be used with the `cil` class prefix.

```
<i class="cil cil-airplane"></i>
```


## Bugs, Ideas, Pull Requests

If you have any ideas or found bugs, please send me Pull Requests or let me know with [GitHub Issues][github issues].

## License

openwebicons is copyright by Matthias Pfefferle, licensed under the [SIL OPEN FONT LICENSE][./LICENSE].

[standard-icons]: https://github.com/thecreation/standard-icons
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
[github issues]: https://github.com/thecreation/standard-icons/issues
[Unpkg]: https://unpkg.com
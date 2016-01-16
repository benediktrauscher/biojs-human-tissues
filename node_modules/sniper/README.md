sniper
-------------

```
                                       ____    _     __     _    ____
                                     |####`--|#|---|##|---|#|--'##|#|
   _                                 |____,--|#|---|##|---|#|--.__|_|
 _|#)_____________________________________,--'EEEEEEEEEEEEEE'_=-.
((_____((_________________________,--------[JW](___(____(____(_==)        _________
                               .--|##,----o  o  o  o  o  o  o__|/`---,-,-'=========`=+==.
                               |##|_Y__,__.-._,__,  __,-.___/ J \ .----.#############|##|
                               |##|              `-.|#|##|#|`===l##\   _\############|##|
                              =======-===l          |_|__|_|     \##`-"__,=======.###|##|
                                                                  \__,"          '======'

 ```
[![NPM version][npm-image]][npm-url]

```
npm install -g sniper
```

CLI Server for Snippets (Visualization examples).

How to use
----------

### 1. specify all global dependencies in your `package.json`

```
  "sniper": {
    "js": ["/build/msa.js"],
    "css": ["/css/msa.css"],
    "first": "msa_show_menu"
  }

```

`js`: (array) all js dependencies  (paths starting with `/build` will be ignored at the BioJS registry) (required)
`first`: name of the snippet to be displayed as first example on the BioJS registry   (required)
`css`: all css files you need (optional)  
`snippets`: (optional) all snippet folders (default: ["snippets"])  

More attributes:

* `buildCSS` (will replace `css`)
* `buildJS` (will replace `js`)

The `build` attributes can be used to specify alternative locations - in any case the registry will ignore js resources starting with `build`.


### 2. Create snippets

Create `js` files in the `examples` folder.

```
var app = require("your-awesome-component");
var instance = new app(yourDiv);
```

You can safely assume that the variable `yourDiv` is your main div. Use `yourDiv.id` if your component expects an id.
If you dislike this handy wrapping, you can create your own `<same-filename>.html` file.
(In case there is no `<same-filename>.html` the sniper will automatically generate one with a div and a randomId - you have access to this div as DOM reference via `yourDiv`).

### 3. Run the server

```
sniper <your-dir>
```

If <your-dir> is `.`, you don't need to have this argument.

Now you can open `localhost:9090`.

There are there modes:

1) Overview mode/list

> [localhost:9090/examples](http://localhost:9090/examples)

2) List all

> [localhost:9090/examples/all](http://localhost:9090/examples/all)

3) List one/detail view

> [localhost:9090/examples/your_snippet](http://localhost:9090/examples/your_snippet])

4) Emulate the BioJS registry

> [localhost:9090/emu-examples/your_snippet](http://localhost:9090/emu-examples/your_snippet])

(will use the published npm source)


The files are refreshed on every reload.

### 4. I don't want to run the sniper tool

use:

```
sniper -c 
```

This will compile all the snippets to a minimal HTML version, remember that only
the example snippets will be uploaded to the registry.

### 5. If you need to add extra js-Files (or css) for a snippet

... just create the ```same_filename.json`.

```
{js: ["<more js dependencies>"]}
```

### 6. What other CLI options are available?

```
  Usage: sniper [options] [pkgdir]

  Options:

    -h, --help                 output usage information
    -V, --version              output the version number
    -p, --port <number>        port to run
    -c, --compile [directory]  Creates static output
    -v, --verbose              Increase verbosity
```

FAQ?
-----

#### How can I request relative data? (e.g. for JSBin)

If you want to download data via XHR you might normally write `data/data.json` - make it __relative__ by appending `./`.
So you would have `./data/data.json`

#### How can I transmit my events to the registry?

add this line somewhere after you created your application instance in the snippet.
E.g. if you make an XHR request it has to be in the callback.

```
//@biojs-instance=<variable name of your component>
```

(this is - under the hood - replaced with `instance.onAll` and then sends messages to the parent frame).

How does it work?
----------

* normal file server
* if you go into one of the special snippet folders, the general config specifies which js and css needs to be there for every snippet.
* a snippet can either work with `yourDiv` (a predefined variable pointing to a div container) or define a custom, minimal `.html`
* also every snippet can define custom settings, like extra js 

An example can be found at [biojs-vis-msa](https://github.com/greenify/biojs-vis-msa/tree/master/snippets).

Why snippets?
---------------------------

Reason: visually appealing example files in the [registry](http://biojs.io/d/biojs-vis-msa) (inspired by [Angular JS](https://docs.angularjs.org/api/ng/directive/ngClick) )

[npm-url]: https://npmjs.org/package/sniper
[npm-image]: https://badge.fury.io/js/sniper.svg

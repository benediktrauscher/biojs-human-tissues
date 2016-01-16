# biojs-human-tissues

[![NPM version](http://img.shields.io/npm/v/biojs-human-tissues.svg)](https://www.npmjs.org/package/biojs-human-tissues)

> Visualisation of human tissues

## Getting Started
Install the module with: `npm install biojs-human-tissues`

```javascript
var HumanTissues = require('biojs-human-tissues');
var Tissues = new HumanTissues({el: <div>, [colors: <object>]})
```

## Documentation

Light-weight visualisation for human tissues. Right now the list of supported tissues includes

* skin
* brain
* lungs
* liver
* pancreas
* stomach
* colon.

More tissues will be added in future versions.

Please refer to the example for more detailed instructions on how to initialize and use the visualisation.

#### .hello(name)

**Parameter**: `name`
**Type**: `String`
**Example**: `biojs`

The 'hello' method is responsible for showing a name.

How to use this method

```javascript
tissues.hello('biojs'); // "hello biojs"
```

#### .render()

**Example**: `simple`

Method responsible to render the visualisation

How to use this method

```javascript
Tissues.render()
```

#### .addMouseoverEvent(tissue, func)

**Parameter**: `tissue`
**Type**: `String`
**Example**: `simple`

**Parameter**: `func`
**Type**: `Function`
**Example**: `simple`

Method responsible to set mouseover events for tissues.

How to use this method

```javascript
Tissues.addMouseoverEvent('pancreas', function(evt){
  console.log('Mousing over ' + evt.srcElement.id;);
});
```

#### .addMouseoverEvent(tissue, func)

**Parameter**: `tissue`
**Type**: `String`
**Example**: `simple`

**Parameter**: `func`
**Type**: `Function`
**Example**: `simple`

Method responsible to set click events for tissues.

How to use this method

```javascript
Tissues.addClickEvent('pancreas', function(evt){
  console.log('Clicked on ' + evt.srcElement.id;);
});
```

#### .setColor(tissue, color)

**Parameter**: `tissue`
**Type**: `String`
**Example**: `simple`

**Parameter**: `color`
**Type**: `String`
**Example**: `simple`

Method responsible to say set colors for tissues.

How to use this method

```javascript
Tissues.setColor('colon', '#444');
```

## Contributing

All contributions are welcome.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/bene200/biojs-human-tissues/issues).

## License

The MIT License

Copyright (c) 2016, Benedikt Rauscher

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

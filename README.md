# biojs-human-tissues

[![NPM version](http://img.shields.io/npm/v/biojs-human-tissues.svg)](https://www.npmjs.org/package/biojs-human-tissues)

> Visualisation of human tissues

## Getting Started
Install the module with: `npm install biojs-human-tissues`

```javascript
var HumanTissues = require('biojs-human-tissues');
var Tissues = new HumanTissues({el: <div>, [colors: <object>], gender: string, width: string, tissuesShown: StringArray})
```

## Documentation

Light-weight visualisation for human tissues. Right now the list of supported tissues includes

* skin
* brain
* lungs
* liver
* pancreas
* stomach
* small_intestine
* large_intestine
* neck
* kidney
* prostate
* bladder
* breast
* cervix
* ovary
* uterus
* retina

Please notice that it is now possible to make either a female or a male silhouette.

Please notice it is now possible to scale the silhouette.

Please notice it is now possible to decide, which tissues should be shown.

Please refer to the example for more detailed instructions on how to initialize and use the visualisation.

#### .render()

Method responsible to render the visualisation

How to use this method

```javascript
Tissues.render()
```

#### .addMouseoverEvent(tissue, func)

**Parameter**: `tissue`
**Type**: `String`
**Example**: `colon`

**Parameter**: `func`
**Type**: `Function`
**Example**: `function(evt){ console.log(evt.srcTarget.id); }`

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
**Example**: `colon`

**Parameter**: `func`
**Type**: `Function`
**Example**: `function(evt){ console.log(evt.srcTarget.id); }`

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
**Example**: `colon`

**Parameter**: `color`
**Type**: `String`
**Example**: `#444`

Method responsible to say set colors for tissues.

How to use this method

```javascript
Tissues.setColor('colon', '#444');
```

#### .hide(tissue)

**Parameter**: `tissue`
**Type**: `String`
**Example**: `colon`

Method responsible to hide a tissue.

How to use this method

```javascript
Tissues.hide('colon');
```

#### .show(tissue)

**Parameter**: `tissue`
**Type**: `String`
**Example**: `colon`

Method responsible to show a tissue.

How to use this method

```javascript
Tissues.show('colon');
```

#### .addTooltip(tissue, ttcontent)

**Parameter**: `tissue`
**Type**: `String`
**Example**: `colon`

**Parameter**: `ttcontent`
**Type**: `String`
**Example**: `<h1>Colon tooltip!</h1>`

Method responsible for adding Tooltips to tissues. The tooltip content is specified by the ttcontent parameter which can be a HTML string.

How to use this method

```javascript
Tissues.addTooltip('pancreas', '<h1>Pancreas!</h1>');
```

#### .tooltipCss(key, value)

**Parameter**: `key`
**Type**: `String`
**Example**: `backgroundColor`

**Parameter**: `value`
**Type**: `String`
**Example**: `steelblue`

Method that allows to change the CSS for tooltips.

How to use this method

```javascript
Tissues.tooltipCss('backgroundColor', 'steelblue');
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

// if you don't specify a html file, the sniper will generate a div with id "rootDiv"
var HumanTissues = require("biojs-human-tissues");
var Tissues = new HumanTissues({el: rootDiv});

//Rendering needs to happen before events are set!
Tissues.render();

Tissues.addClickEvent('brain', function(evt){
  window.open('https://en.wikipedia.org/wiki/Brain','_blank')
});
Tissues.addClickEvent('liver', function(evt){
  window.open('https://en.wikipedia.org/wiki/Liver','_blank')
});
Tissues.addClickEvent('lungs', function(evt){
  window.open('https://en.wikipedia.org/wiki/Lung','_blank')
});
Tissues.addClickEvent('stomach', function(evt){
  window.open('https://en.wikipedia.org/wiki/Stomach','_blank')
});
Tissues.addClickEvent('colon', function(evt){
  window.open('https://en.wikipedia.org/wiki/Large_intestine','_blank')
});
Tissues.addClickEvent('pancreas', function(evt){
  window.open('https://en.wikipedia.org/wiki/Pancreas','_blank')
});
Tissues.addClickEvent('skin', function(evt){
  window.open('https://en.wikipedia.org/wiki/Skin','_blank')
});

for(var i=0; i<Tissues.tissues.length; i++){
  Tissues.addMouseoverEvent(Tissues.tissues[i], function(evt){
    console.log('Mousing over ' + evt.srcElement.id);
  });
}

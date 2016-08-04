// if you don't specify a html file, the sniper will generate a div with id "rootDiv"
var HumanTissues = require("biojs-human-tissues");
var tissues = new HumanTissues({el: rootDiv});

//Rendering needs to happen before events are set!
tissues.render();

tissues.addClickEvent('brain', function(evt){
  window.open('https://en.wikipedia.org/wiki/Brain','_blank')
});
tissues.addClickEvent('liver', function(evt){
  window.open('https://en.wikipedia.org/wiki/Liver','_blank')
});
tissues.addClickEvent('lungs', function(evt){
  window.open('https://en.wikipedia.org/wiki/Lung','_blank')
});
tissues.addClickEvent('stomach', function(evt){
  window.open('https://en.wikipedia.org/wiki/Stomach','_blank')
});
tissues.addClickEvent('colon', function(evt){
  window.open('https://en.wikipedia.org/wiki/Large_intestine','_blank')
});
tissues.addClickEvent('pancreas', function(evt){
  window.open('https://en.wikipedia.org/wiki/Pancreas','_blank')
});
tissues.addClickEvent('skin', function(evt){
  window.open('https://en.wikipedia.org/wiki/Skin','_blank')
});
tissues.addClickEvent('small_intestine', function(evt){
  window.open('https://en.wikipedia.org/wiki/Small_intestine','_blank')
});


//example mouseover events
for(var i=0; i<tissues.tissues.length; i++){
  tissues.addMouseoverEvent(tissues.tissues[i], function(evt){
    console.log('Mousing over ' + evt.srcElement.id);
  });
}

//example tooltips
var t;
for(var i=0; i<tissues.tissues.length; i++){
  t = tissues.tissues[i];
  tissues.addTooltip(t, '<h1>Tooltip for ' + t + '!</h1>');
}

window.tissues = tissues;

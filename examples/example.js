  let malediv = document.getElementById("male");
  let femalediv = document.getElementById("female");

  const HumanTissues = require('biojs-human-tissues');
  let tissuesmale = new HumanTissues({el: malediv, gender: 'male', width: '4in'});
  let tissuesfemale = new HumanTissues({el: femalediv, gender: 'female', width: '500px'});

  tissuesmale.render();

  tissuesmale.addClickEvent('neck', function(evt){
    window.open('https://en.wikipedia.org/wiki/Neck','_blank');
  });

  tissuesmale.addClickEvent('large_intestine', function(evt){
    window.open('https://en.wikipedia.org/wiki/Large_intestine','_blank');
  });

  tissuesmale.addClickEvent('small_intestine', function(evt){
    window.open('https://en.wikipedia.org/wiki/Small_intestine','_blank');
  });

  tissuesmale.addClickEvent('liver', function(evt){
    window.open('https://en.wikipedia.org/wiki/Liver','_blank');
  });

  tissuesmale.addClickEvent('pancreas', function(evt){
    window.open('https://en.wikipedia.org/wiki/Pancreas','_blank');
  });

  tissuesmale.addClickEvent('lungs', function(evt){
    window.open('https://en.wikipedia.org/wiki/Lungs','_blank');
  });

  tissuesmale.addClickEvent('stomach', function(evt){
    window.open('https://en.wikipedia.org/wiki/Stomach','_blank');
  });

  tissuesmale.addClickEvent('kidney', function(evt){
    window.open('https://en.wikipedia.org/wiki/Kidney','_blank');
  });

  tissuesmale.addClickEvent('prostate', function(evt){
    window.open('https://en.wikipedia.org/wiki/Prostate','_blank');
  });

  tissuesmale.addClickEvent('bladder', function(evt){
    window.open('https://en.wikipedia.org/wiki/Bladder','_blank');
  });

  tissuesmale.addClickEvent('bone', function(evt){
    window.open('https://en.wikipedia.org/wiki/bone','_blank');
  });

  tissuesmale.addClickEvent('blood', function(evt){
    window.open('https://en.wikipedia.org/wiki/Blood','_blank');
  });

  tissuesmale.addClickEvent('retina', function(evt){
    window.open('https://en.wikipedia.org/wiki/Retina','_blank');
  });

  tissuesmale.addClickEvent('skin_man', function(evt){
    window.open('https://en.wikipedia.org/wiki/Skin','_blank');
  });

  tissuesfemale.render();

  tissuesfemale.addClickEvent('brain', function(evt){
    window.open('https://en.wikipedia.org/wiki/Brain','_blank');
  });

  tissuesfemale.addClickEvent('breast', function(evt){
    window.open('https://en.wikipedia.org/wiki/Breast','_blank');
  });

  tissuesfemale.addClickEvent('cervix', function(evt){
    window.open('https://en.wikipedia.org/wiki/Cervix','_blank');
  });

  tissuesfemale.addClickEvent('ovary', function(evt){
    window.open('https://en.wikipedia.org/wiki/Ovary','_blank');
  });

  tissuesfemale.addClickEvent('uterus', function(evt){
    window.open('https://en.wikipedia.org/wiki/Uterus','_blank');
  });

  tissuesfemale.addClickEvent('skin_woman', function(evt){
    window.open('https://en.wikipedia.org/wiki/Skin','_blank');
  });

  tissuesfemale.addClickEvent('lymph', function(evt){
    window.open('https://en.wikipedia.org/wiki/Lymph','_blank');
  });

  let malediv = document.getElementById("male");
  let femalediv = document.getElementById("female");

  const HumanTissues = require('biojs-human-tissues');
  let tissuesmale = new HumanTissues({el: malediv, gender: 'male' });
  let tissuesfemale = new HumanTissues({el: femalediv, gender: 'female' });

  tissuesmale.render();

  tissuesmale.addClickEvent('neck', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Neck','_blank');
  });

  tissuesmale.addClickEvent('large_intestine', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Large_intestine','_blank');
  });

  tissuesmale.addClickEvent('small_intestine', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Small_intestine','_blank');
  });

  tissuesmale.addClickEvent('liver', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Liver','_blank');
  });

  tissuesmale.addClickEvent('pancreas', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Pancreas','_blank');
  });

  tissuesmale.addClickEvent('lungs', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Lungs','_blank');
  });

  tissuesmale.addClickEvent('stomach', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Stomach','_blank');
  });

  tissuesmale.addClickEvent('kidney', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Kidney','_blank');
  });

  tissuesmale.addClickEvent('prostate', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Prostate','_blank');
  });

  tissuesmale.addClickEvent('bladder', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Bladder','_blank');
  });

  tissuesmale.addClickEvent('bone', (evt) => {
    window.open('https://en.wikipedia.org/wiki/bone','_blank');
  });

  tissuesmale.addClickEvent('blood', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Blood','_blank');
  });

  tissuesmale.addClickEvent('retina', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Retina','_blank');
  });

  tissuesmale.addClickEvent('skin_man', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Skin','_blank');
  });

  tissuesfemale.render();

  tissuesfemale.addClickEvent('brain', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Brain','_blank');
  });

  tissuesfemale.addClickEvent('breast', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Breast','_blank');
  });

  tissuesfemale.addClickEvent('cervix', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Cervix','_blank');
  });

  tissuesfemale.addClickEvent('ovary', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Ovary','_blank');
  });

  tissuesfemale.addClickEvent('uterus', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Uterus','_blank');
  });

  tissuesfemale.addClickEvent('skin_woman', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Skin','_blank');
  });

  tissuesfemale.addClickEvent('lymph', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Lymph','_blank');
  });

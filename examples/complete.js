  let malediv = document.getElementById("male");
  let femalediv = document.getElementById("female");

  const HumanTissues = require('biojs-human-tissues');
  let tissuesmale = new HumanTissues({  el: malediv, gender: 'male'});
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

  tissuesmale.addClickEvent('skin', (evt) => {
    window.open('https://en.wikipedia.org/wiki/Skin','_blank');
  });

  tissuesfemale.render();

  tissuesfemale.addTooltip(`brain`,`<h3> Brain </h3>`, `click`);
  tissuesfemale.addTooltip(`breast`,`<h3> Breast </h3>`, `click`);
  tissuesfemale.addTooltip(`cervix`,`<h3> Cervix </h3>`, `click`);
  tissuesfemale.addTooltip(`ovary`,`<h3> Ovary </h3>`,'click');
  tissuesfemale.addTooltip(`uterus`,`<h3> Uterus </h3>`,'click');
  tissuesfemale.addTooltip(`skin`,`<h3> Skin </h3>`,'click');
  tissuesfemale.addTooltip(`lymph`,`<h3> Lymph </h3>`,'click');

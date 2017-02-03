const skin_woman = require('./skin_woman');
const brain = require('./brain');
const breast = require('./breast');
const cervix = require('./cervix');
const ovary = require('./ovary');
const uterus = require('./uterus');
const skin_man = require('./skin_man');
const neck = require('./neck');
const large_intestine = require('./large_intestine');
const small_intestine = require('./small_intestine');
const liver = require('./liver');
const pancreas = require('./pancreas');
const lungs = require('./lungs');
const stomach = require('./stomach');
const kidney = require('./kidney');
const prostate = require('./prostate');
const bladder = require('./bladder');
const bone = require('./bone');
const blood = require('./blood');
const retina = require('./retina');
const lymph = require('./lymph');

const defaultTissuesShownMan = [
  'skin_man','bone','blood',
  'kidney','small_intestine',
  'large_intestine','lungs','stomach',
  'liver','pancreas','neck','bladder',
  'prostate','retina'
];

const defaultTissuesShownWoman = [
  'skin_woman','brain',
  'breast','cervix',
  'ovary','uterus','lymph'
];

module.exports = function(gender, width,tissuesShown){
  let svgpath, height;

  if(width == null){
    width = '100%';
    height ='100%';
  }else{
    height = calculateHeight(width);
  }

  let tissuesString = createTissuesString(tissuesShown,gender);

  svgpath = `
          <svg xmlns="http://www.w3.org/2000/svg"
               width="${width}" height="${height}"
               viewBox="0 0 475 1098">
               ${tissuesString}
          </svg>
          `;

  return svgpath;
}

// Method sets height depending on the width
let calculateHeight = (width) => {
  let height;
  let typeofInput = width.substring(width.length-2,width.length);
  let widthN = width.substring(0,width.length-2);
  if(typeofInput.includes('%')){
    widthN += typeofInput.substring(0,1);
    height = 2.31157973 * widthN + '%';
  }else{
    height = 2.31157973 * widthN + typeofInput;
  }
  return height;
}

// Method creates the string of which tissues should be shown
let createTissuesString = (tissuesShown,gender) => {
  let tissuesString = ``;
  tissuesShown.forEach(t => {
    switch(gender){
      case 'female' : {
        if(t==='skin'){
          t = 'skin_woman';
        };
        if(defaultTissuesShownWoman.find(x => x===t)){
          let tissueToDraw = require(`./${t}`);
          tissuesString += `${tissueToDraw}`;
        }
        break;
      }
      case 'male' : {
        if(t==='skin'){
          t = 'skin_man';
        };
        if(defaultTissuesShownMan.find(x => x===t)){
          let tissueToDraw = require(`./${t}`);
          tissuesString += `${tissueToDraw}`;
        }
        break;
      }
    }
  })

  return tissuesString;
}

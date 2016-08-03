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

module.exports = function(gender, width,tissuesShown){
  let svgpath, height;

  if(width == null){
    width = '100%';
    height ='100%';
  }else{
    height = calculateHeight(width);
  }

  let tissuesString = createTissuesString(tissuesShown,gender);

  if(gender === 'female'){
    svgpath = `
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="${width}" height="${height}"
                 viewBox="0 0 475 1098">
                 ${tissuesString}
            </svg>
            `;
  } else {
    svgpath = `
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="${width}" height="${height}"
                 viewBox="0 0 475 1098">
                 ${tissuesString}
            </svg>`;
  }

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
  console.log(gender);
  if(gender == 'female'){
    if(tissuesShown.find(x => x == 'skin_woman') != null){
      tissuesString += `${skin_woman}`;
    }
    if(tissuesShown.find(x => x == 'brain') != null){
      tissuesString += `${brain}`;
    }
    if(tissuesShown.find(x => x == 'uterus') != null){
      tissuesString += `${uterus}`;
    }
    if(tissuesShown.find(x => x == 'breast') != null){
      tissuesString += `${breast}`;
    }
    if(tissuesShown.find(x => x == 'cervix') != null){
      tissuesString += `${cervix}`;
    }
    if(tissuesShown.find(x => x == 'ovary') != null){
      tissuesString += `${ovary}`;
    }
  }
  if(gender == 'male'){
    if(tissuesShown.find(x => x == 'skin_man') != null){
      tissuesString += `${skin_man}`;
    }
    if(tissuesShown.find(x => x == 'neck') != null){
      tissuesString += `${neck}`;
    }
    if(tissuesShown.find(x => x == 'large_intestine') != null){
      tissuesString += `${large_intestine}`;
    }
    if(tissuesShown.find(x => x == 'small_intestine') != null){
      tissuesString += `${small_intestine}`;
    }
    if(tissuesShown.find(x => x == 'liver') != null){
      tissuesString += `${liver}`;
    }
    if(tissuesShown.find(x => x == 'pancreas') != null){
      tissuesString += `${pancreas}`;
    }
    if(tissuesShown.find(x => x == 'lungs') != null){
      tissuesString += `${lungs}`;
    }
    if(tissuesShown.find(x => x == 'stomach') != null){
      tissuesString += `${stomach}`;
    }
    if(tissuesShown.find(x => x == 'kidney') != null){
      tissuesString += `${kidney}`;
    }
    if(tissuesShown.find(x => x == 'bladder') != null){
      tissuesString += `${bladder}`;
    }
    if(tissuesShown.find(x => x == 'prostate') != null){
      tissuesString += `${prostate}`;
    }
    if(tissuesShown.find(x => x == 'bone') != null){
      tissuesString += `${bone}`;
    }
    if(tissuesShown.find(x => x == 'blood') != null){
      tissuesString += `${blood}`;
    }
    if(tissuesShown.find(x => x == 'retina') != null){
      tissuesString += `${retina}`;
    }
  }

  return tissuesString;
}

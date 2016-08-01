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

module.exports = function(gender, width){
  let svgpath, height;

  if(width == null){
    width = '100%';
    height ='100%';
  }else{
    height = calculateHeight(width);
  }

  if(gender === 'female'){
    svgpath = `
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="${width}" height="${height}"
                 viewBox="0 0 475 1098">
                 ${skin_woman}${brain}${breast}${cervix}${ovary}${uterus}
            </svg>
            `;
  } else {
    svgpath = `
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="${width}" height="${height}"
                 viewBox="0 0 475 1098">
                 ${skin_man}${neck}${large_intestine}${small_intestine}${liver}${pancreas}${lungs}${stomach}${kidney}${bladder}${prostate}${bone}${blood}
            </svg>`;
  }

  return svgpath;
}

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

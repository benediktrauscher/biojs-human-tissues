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

module.exports = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="6.59722in" height="15.25in"
     viewBox="0 0 475 1098">
     ${skin_man}${neck}${large_intestine}${small_intestine}${liver}${pancreas}${lungs}${stomach}${kidney}${prostate}${bladder}${bone}${blood}
</svg>`;

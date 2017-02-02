/*
 * biojs-human-tissues
 * https://github.com/bene200/biojs-human-tissues
 *
 * Copyright (c) 2016 Benedikt Rauscher
 * Licensed under the MIT license.
 */

//external dependencies
const _ = require('underscore'),
      $ = require('jquery');

//internal dependencies
const Tip = require('./easytip');

const defaultColors = {
  skin_old: '#ffcc99',
  skin: '#ffcc99',
  bladder: '#FFD034',
  blood: '#FF4C3B',
  bone: '#FFFFFF',
  brain: '#47a447',
  brain_old: '#47a447',
  breast: '#FF7A5A',
  cervix: '#455600',
  kidney: '#550054',
  small_intestine: '#FF69B4',
  large_intestine: '#3276b1',
  colon: '#3276b1',
  lungs: '#ed9c28',
  stomach: '#39b3d7',
  liver: '#db4437',
  pancreas: '#f4b400',
  small_intestine_old: '#FF69B4',
  colon_old: '#3276b1',
  lungs_old: '#ed9c28',
  stomach_old: '#39b3d7',
  liver_old: '#db4437',
  pancreas_old: '#f4b400',
  neck: '#FF4C3B',
  ovary: '#0072BB',
  prostate: '#462066',
  uterus: '#FFB85F',
  retina: '#00AAA0',
  lymph: '#3234AF'
};

const defaultTissuesShownOld = [
  'skin_old','brain_old','colon_old',
  'lungs_old','stomach_old','liver_old',
  'pancreas_old','small_intestine_old'
]

const defaultTissuesShownMan = [
  'skin','bone','blood',
  'small_intestine','large_intestine',
  'lungs','kidney','liver',
  'pancreas','stomach','neck',
  'bladder','prostate','retina'
]

const defaultTissuesShownWoman = [
  'skin','brain',
  'breast','cervix',
  'ovary','uterus','lymph'
]

module.exports = class Tissues{
  constructor({el=null, colors=null, gender='male', width='300px', tissuesShown=null}){
    this.el = el;
    this.colorMap = colors ? colors : defaultColors;
    this.gender = gender;
    this.width = width;

    if(this.gender == null){
      this.tissuesShown = tissuesShown ? tissuesShown : defaultTissuesShownOld;
      this.tissues = defaultTissuesShownOld;
    } else if(this.gender === 'female'){
      this.tissuesShown = tissuesShown ? tissuesShown : defaultTissuesShownWoman;
      this.tissues = defaultTissuesShownWoman;
    } else if(this.gender === 'male'){
      this.tissuesShown = tissuesShown ? tissuesShown : defaultTissuesShownMan;
      this.tissues = defaultTissuesShownMan;
    }

    //initialize array for potential tooltips
    this.tooltips = [];
  }

  /**
  * Method responsible to say set colors for tissues
  *
  * @example
  *
  *     Tissues.setColor('colon', '#444');
  *
  * @method setColor
  * @param {String} tissue Tissue to set colour for
  * @param {String} color Colour for tissue
  */

  setColor(tissue, color){
    //if(!_.find(this.tissues, el => { return tissue === el; })){
    if(!this.tissues.find(el => tissue === el)){
      throw new Error('Specified tissue is not supported.');
    } else {
      if(tissue === 'skin' && this.gender === 'female'){
        tissue = 'skin_woman';
      };
      if(tissue === 'skin' && this.gender ===  'male'){
        tissue = 'skin_man';
      };
      $('#' + tissue).css('fill', color);
    }
  }

  /**
  * Method responsible to render the visualisation. There are two different visualisations, one for male one for female.
  *
  * @example
  *
  *     Tissues.render();
  *
  * @method render
  */

  render() {

    //import tissues svg
    if(this.gender != null){
      const genderSVG = require('../data/tissues');
      this.el.innerHTML = genderSVG(this.gender, this.width, this.tissuesShown);
    } else {
      this.el.innerHTML = require('../data/tissues-old');
    }
    //set colours
    _.each(this.tissues, t => {
      this.setColor(t, this.colorMap[t]);
    });
  }

  /**
  * Method responsible to set mouseover events for tissues
  *
  * @example
  *
  *     Tissues.addMouseoverEvent('pancreas', function(evt){
  *       console.log('Mousing over ' + evt.srcElement.id; );
  *     });
  *
  * @method addMouseoverEvent
  * @param {String} tissue Tissue to set mouseover event for
  * @param {Function} func The function to perform on mouseover event
  */

  addMouseoverEvent(tissue, func) {
    // For the case somebody uses the old tissue
    if(this.gender == null){
      tissue += '_old';
    }
    //if(!_.find(this.tissues, el => { return tissue === el; })){
    if(!this.tissues.find(el => tissue === el)){
      throw new Error('Specified tissue is not supported.');
    } else {
      // in case of tissue skin, this must be done to find the right tissue
      if(this.gender === 'male' && tissue === 'skin'){
        tissue = 'skin_man';
      };
      if(this.gender === 'female' && tissue === 'skin'){
        tissue = 'skin_woman';
      };
      $('#' + tissue).on('mouseover', evt => {
        $('#' + tissue).css('stroke', '#fff');
        func(evt.originalEvent);
      });
      $('#' + tissue).on('mouseout', evt => {
        $('#' + tissue).css('stroke', 'black');
      });
    }
  }

  /**
  * Method responsible to set click events for tissues
  *
  * @example
  *
  *     Tissues.addClickEvent('pancreas', function(evt){
  *       console.log('Clicked on ' + evt.srcElement.id; );
  *     });
  *
  * @method addClickEvent
  * @param {String} tissue Tissue to set click event for
  * @param {Function} func The function to perform on click event
  */

  addClickEvent(tissue, func) {
    // For the case somebody uses the old tissue
    if(this.gender == null){
      tissue += '_old';
    }
    //if(!_.find(this.tissues, el => { return tissue === el; })){
    if(!this.tissues.find(el => tissue === el)){
      throw new Error('Specified tissue is not supported.');
    } else {
      // in case of tissue skin, this must be done to find the right tissue
      if(this.gender === 'male' && tissue === 'skin'){
        tissue = 'skin_man';
      };
      if(this.gender === 'female' && tissue === 'skin'){
        tissue = 'skin_woman';
      };
      $('#' + tissue).css('cursor', 'pointer');
      $('#' + tissue).on('click', evt => {
        func(evt.originalEvent);
      });
    }
  }

  /**
  * Method responsible to hide a tissue
  *
  * @example
  *
  *     Tissues.hide('pancreas');
  *
  * @method hide
  * @param {String} tissue Tissue to hide
  */

  hide(tissue) {
    // For the case somebody uses the old tissue
    if(this.gender == null){
      tissue += '_old';
    }
    //if(!_.find(this.tissues, el => { return tissue === el; })){
    if(!this.tissues.find(el => tissue === el)){
      throw new Error('Specified tissue is not supported.');
    } else {
      // in case of tissue skin, this must be done to find the right tissue
      if(this.gender === 'male' && tissue === 'skin'){
        tissue = 'skin_man';
      };
      if(this.gender === 'female' && tissue === 'skin'){
        tissue = 'skin_woman';
      };
      $('#' + tissue).css('visibility', 'hidden');
    }
  }

  /**
  * Method responsible to show a hidden tissue
  *
  * @example
  *
  *     Tissues.show('pancreas');
  *
  * @method show
  * @param {String} tissue Tissue to show
  */

  show(tissue) {
    // For the case somebody uses the old tissue
    if(this.gender == null){
      tissue += '_old';
    }
    //if(!_.find(this.tissues, el => { return tissue === el; })){
    if(!this.tissues.find(el => tissue === el)){
      throw new Error('Specified tissue is not supported.');
    } else {
      // in case of tissue skin, this must be done to find the right tissue
      if(this.gender === 'male' && tissue === 'skin'){
        tissue = 'skin_man';
      };
      if(this.gender === 'female' && tissue === 'skin'){
        tissue = 'skin_woman';
      };
      $('#' + tissue).css('visibility', 'visible');
    }
  }

  /**
  * Method responsible to add a tooltip to a tissue
  *
  * @example
  *
  *     Tissues.addTooltip('pancreas', '<h1>Pancreas!</h1>');
  *
  * @method addTooltip
  * @param {String} tissue Tissue to add a tooltip to
  * @param {String} HTML content of the tooltip as string
  */

  addTooltip(tissue, ttcontent, mode) {
    // For the case somebody uses the old tissue
    if(this.gender == null){
      tissue += '_old';
    };
    //if(!_.find(this.tissues, el => { return tissue === el; })){
    if(!this.tissues.find(el => tissue === el)){
      throw new Error('Specified tissue is not supported.');
    } else {
    // in case of tissue skin, this must be done to find the right tissue
    if(this.gender === 'male' && tissue === 'skin'){
      tissue = 'skin_man';
    };
    if(this.gender === 'female' && tissue === 'skin'){
      tissue = 'skin_woman';
    };
    //create new tooltip object
    let tip = new Tip(this.el);
    //set content for tooltip div
    tip.content(ttcontent);
    if(mode){
      // when mode parameter is given check if toggle mode selected
      if(mode === 'click'){
        $('#' + tissue).on('click', (evt) => {
          this.tooltips.forEach((toolTip) => {
            if(toolTip !== tip){
              toolTip.hide();
            }
          })
          tip.toggle(evt);
        });
      }else{
        // then not toogle mode go with mouseenter and mouseout
        //show on mouseenter
        $('#' + tissue).on('mouseenter', evt => {
           tip.show();
        });
        //hide on mouseout
        $('#' + tissue).on('mouseout', evt => {
          tip.hide();
        });
      }
    }else{
      // then mode is not given as parameter just use mouseenter and mouseout
      //show on mouseenter
      $('#' + tissue).on('mouseenter', evt => {
         tip.show();
      });
      //hide on mouseout
      $('#' + tissue).on('mouseout', evt => {
        tip.hide();
      });
    }

    //save tooltips to object letiable so styles can be
    //set collectively
    this.tooltips.push(tip);
  }
}

  /**
  * Method responsible to set CSS for tooltips
  *
  * @example
  *
  *     Tissues.tooltipCss('backgroundColor', 'steelblue');
  *
  * @method tooltipCss
  * @param {String} CSS key
  * @param {String} CSS value
  */

  tooltipCss(key, value){

    //for each tooltip in this.tooltips set css
    _.each(this.tooltips, t => {
      t.setStyle(key, value);
    });
  };
}

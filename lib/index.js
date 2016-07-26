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
  skin_man: '#ffcc99',
  skin_woman: '#ffcc99',
  bladder: '#FF0000',
  blood: '#FF0000',
  bone: '#FFFFFF',
  brain: '#47a447',
  breast: '#0056FF',
  cervix: '#455600',
  kidney: '#550054',
  small_intestine: '#FF69B4',
  large_intestine: '#3276b1',
  lungs: '#ed9c28',
  stomach: '#39b3d7',
  liver: '#db4437',
  pancreas: '#f4b400',
  neck: '#00FFFF',
  ovary: '#0000FF',
  prostate: '#FFFF00',
  uterus: '#FF00FF'
};

module.exports = class Tissues{
  constructor(opts){
    this.el = opts.el;
    this.colorMap = opts.colors ? opts.colors : defaultColors;
    this.tissues = _.keys(defaultColors);
    this.gender = opts.gender;
    console.log(this.gender);

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
      this.el.innerHTML = genderSVG(this.gender);
    } else {
      console.log('no gender')
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

    //if(!_.find(this.tissues, el => { return tissue === el; })){
    if(!this.tissues.find(el => tissue === el)){
      throw new Error('Specified tissue is not supported.');
    } else {
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

    //if(!_.find(this.tissues, el => { return tissue === el; })){
    if(!this.tissues.find(el => tissue === el)){
      throw new Error('Specified tissue is not supported.');
    } else {
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

    //if(!_.find(this.tissues, el => { return tissue === el; })){
    if(!this.tissues.find(el => tissue === el)){
      throw new Error('Specified tissue is not supported.');
    } else {
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

    //if(!_.find(this.tissues, el => { return tissue === el; })){
    if(!this.tissues.find(el => tissue === el)){
      throw new Error('Specified tissue is not supported.');
    } else {
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

  addTooltip(tissue, ttcontent) {

    //if(!_.find(this.tissues, el => { return tissue === el; })){
    if(!this.tissues.find(el => tissue === el)){
      throw new Error('Specified tissue is not supported.');
    } else {
    //create new tooltip object
    let tip = new Tip(this.el);
    //set content for tooltip div
    tip.content(ttcontent);
    //show on mouseenter
    $('#' + tissue).on('mouseenter', evt => {
      tip.show(evt);
    });
    //hide on mouseout
    $('#' + tissue).on('mouseout', evt => {
      tip.hide();
    });
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

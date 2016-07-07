/*
 * biojs-human-tissues
 * https://github.com/bene200/biojs-human-tissues
 *
 * Copyright (c) 2016 Benedikt Rauscher
 * Licensed under the MIT license.
 */

//external dependencies
let _ = require('underscore'),
    $ = require('jquery');

//internal dependencies
let Tip = require('./easytip');

let defaultColors = {
  skin: '#ffcc99',
  brain: '#47a447',
  colon: '#3276b1',
  lungs: '#ed9c28',
  stomach: '#39b3d7',
  liver: '#db4437',
  pancreas: '#f4b400',
  small_intestine: '#FF69B4'
};

module.exports = class Tissues{
  constructor(opts){
    this.el = opts.el;
    this.colorMap = opts.colors ? opts.colors : defaultColors;
    this.tissues = _.keys(defaultColors);

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
    if(!_.find(this.tissues, function(el){ return tissue === el; })){
      throw new Error('Specified tissue is not supported.');
    } else {
      $('#' + tissue).css('fill', color);
    }
  }

  /**
  * Method responsible to render the visualisation
  *
  * @example
  *
  *     Tissues.render();
  *
  * @method render
  */

  render() {
    let self = this;

    //import tissues svg
    self.el.innerHTML = require('../data/tissues.js');

    //set colours
    _.each(self.tissues, function(t){
      self.setColor(t, self.colorMap[t]);
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
    let self = this;

    if(!_.find(self.tissues, function(el){ return tissue === el; })){
      throw new Error('Specified tissue is not supported.');
    } else {
      $('#' + tissue).on('mouseover', function(evt){
      $('#' + tissue).css('stroke', '#fff');
      func(evt.originalEvent);
    });
      $('#' + tissue).on('mouseout', function(evt){
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
    let self = this;

    if(!_.find(self.tissues, function(el){ return tissue === el; })){
      throw new Error('Specified tissue is not supported.');
    } else {
      $('#' + tissue).css('cursor', 'pointer');
      $('#' + tissue).on('click', function(evt){
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
    let self = this;

    if(!_.find(self.tissues, function(el){ return tissue === el; })){
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
    let self = this;

    if(!_.find(self.tissues, function(el){ return tissue === el; })){
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
    let self = this;

    if(!_.find(self.tissues, function(el){ return tissue === el; })){
      throw new Error('Specified tissue is not supported.');
    } else {
    //create new tooltip object
    let tip = new Tip(self.el);
    //set content for tooltip div
    tip.content(ttcontent);
    //show on mouseenter
    $('#' + tissue).on('mouseenter', function(evt){
      tip.show(evt);
    });
    //hide on mouseout
    $('#' + tissue).on('mouseout', function(evt){
      tip.hide();
    });
    //save tooltips to object letiable so styles can be
    //set collectively
    self.tooltips.push(tip);
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
    let self = this;

    //for each tooltip in this.tooltips set css
    _.each(self.tooltips, function(t){
      t.setStyle(key, value);
    });
  };
  }

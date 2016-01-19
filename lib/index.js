/*
 * biojs-human-tissues
 * https://github.com/bene200/biojs-human-tissues
 *
 * Copyright (c) 2016 Benedikt Rauscher
 * Licensed under the MIT license.
 */

var _ = require('underscore'),
    $ = require('jquery');

var defaultColors = {
  skin: '#ffcc99',
  brain: '#47a447',
  colon: '#3276b1',
  lungs: '#ed9c28',
  stomach: '#39b3d7',
  liver: '#db4437',
  pancreas: '#f4b400',
  small_intestine: '#FF69B4'
}


var  biojshumantissues;
module.exports = Tissues = function(opts){
  this.el = opts.el;
  this.colorMap = opts.colors ? opts.colors : defaultColors;
  this.tissues = _.keys(defaultColors);
};

/*
 * Private Methods
 */


/*
 * Public Methods
 */

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

Tissues.prototype.setColor = function(tissue, color){
  if(!_.find(this.tissues, function(el){ return tissue === el; })){
    throw new Error('Specified tissue is not supported.');
  } else {
    $('#' + tissue).css('fill', color);
  }
};

/**
 * Method responsible to render the visualisation
 *
 * @example
 *
 *     Tissues.render();
 *
 * @method render
 */

Tissues.prototype.render = function () {
  var self = this;

  //import tissues svg
  self.el.innerHTML = require('../data/tissues.js');

  //set colours
  _.each(self.tissues, function(t){
    self.setColor(t, self.colorMap[t]);
  });
};

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

Tissues.prototype.addMouseoverEvent = function (tissue, func) {
  var self = this;

  if(!_.find(this.tissues, function(el){ return tissue === el; })){
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
};

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

Tissues.prototype.addClickEvent = function (tissue, func) {
  var self = this;

  if(!_.find(this.tissues, function(el){ return tissue === el; })){
    throw new Error('Specified tissue is not supported.');
  } else {
    $('#' + tissue).css('cursor', 'pointer');
    $('#' + tissue).on('click', function(evt){
      func(evt.originalEvent);
    });
  }
};

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

Tissues.prototype.hide = function (tissue) {
  var self = this;

  if(!_.find(this.tissues, function(el){ return tissue === el; })){
    throw new Error('Specified tissue is not supported.');
  } else {
    $('#' + tissue).css('visibility', 'hidden');
  }
};

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

Tissues.prototype.show = function (tissue) {
  var self = this;

  if(!_.find(this.tissues, function(el){ return tissue === el; })){
    throw new Error('Specified tissue is not supported.');
  } else {
    $('#' + tissue).css('visibility', 'visible');
  }
};

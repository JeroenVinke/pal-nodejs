"use strict"

import {initializePAL} from 'aurelia-pal';
import {IPlatform} from './platform';
import {IGlobal} from './global';
import {NodeJsPlatform} from './nodejs-platform';
import {NodeJsDom} from './nodejs-dom';
import {jsdom} from 'jsdom';


let isInitialized = false;

/**
* Initializes the PAL with the Browser-targeted implementation.
*/
export function initialize(): void {
  if (isInitialized) {
    return;
  }

  isInitialized = true;
  
  //_ensureCustomEvent();
  //_ensureFunctionName();
  //_ensureHTMLTemplateElement();
  //_ensureElementMatches();
  //_ensureClassList();
  //_ensurePerformance();

  var global:IGlobal = jsdom(undefined, {}).defaultView;

  var _platform = new NodeJsPlatform(global);
  var _dom = new NodeJsDom(global);

  initializePAL((platform, feature, dom) => {
    Object.assign(platform, _platform);
    //Object.assign(feature, _FEATURE);
    Object.assign(dom, _dom);

    (function(global) {
      global.console = global.console || {};
      let con = global.console;
      let prop;
      let method;
      let empty = {};
      let dummy = function() {};
      let properties = 'memory'.split(',');
      let methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
         'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
         'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
      while (prop = properties.pop()) if (!con[prop]) con[prop] = empty;
      while (method = methods.pop()) if (!con[method]) con[method] = dummy;
    })(platform.global);

    if (platform.global.console && typeof console.log === 'object') {
      ['log', 'info', 'warn', 'error', 'assert', 'dir', 'clear', 'profile', 'profileEnd'].forEach(function(method) {
        console[method] = this.bind(console[method], console);
      }, Function.prototype.call);
    }

    Object.defineProperty(dom, 'title', {
      get: function() {
        return document.title;
      },
      set: function(value) {
        document.title = value;
      }
    });

    Object.defineProperty(dom, 'activeElement', {
      get: function() {
        return document.activeElement;
      }
    });

    Object.defineProperty(platform, 'XMLHttpRequest', {
      get: function() {
        return platform.global.XMLHttpRequest;
      }
    });
  });
}
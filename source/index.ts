"use strict"

import {IPlatform} from './platform';
import {NodeJsPlatform} from './nodejs-platform';
import {NodeJsDom} from './nodejs-dom';

/**
* The singleton instance of the Platform API.
*/
export const PLATFORM:NodeJsPlatform = new NodeJsPlatform();
/**
* The singleton instance of the Dom API.
*/
export const DOM: NodeJsDom = new NodeJsDom()
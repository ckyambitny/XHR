'use strict';

import {} from './ecma/es7/Array.js';
import RequestHandler from './modules/RequestHandler.es6.js';

// global (JSON dependency)
window.RequestHandler = RequestHandler;

window.addEventListener('load', () => {

    let xhr = new RequestHandler();

    xhr.fetch('./data/data1.json', () => {
        console.info('[DONE] ./data/data1.json');
    }, () => {
        console.error('[FAILED] ./data/data1.json');
    });

    let xhr2 = new RequestHandler();

    xhr2.fetch('./data/data2.xml', () => {
        console.info('[DONE] ./data/data2.xml');
    }, () => {
        console.error('[FAILED] ./data/data2.xml');
    });

});
'use strict';

import {} from './ecma/es7/Array.js';
import RequestHandler from './modules/RequestHandler.es6.js';
// global (JSON dependency) deprecated
window.mimeTypes = {
    "text/plain": ["txt", "rtf"],
    "text/json": ["json"],
    "application/xml": ["xml"]
};
window.addEventListener('load', () => {

    //let xhr = new RequestHandler();

    fetch('./data/data1.json').then( (response) => {
        console.info('[DONE] ./data/data1.json');
    }, () => {
        console.error('[FAILED] ./data/data1.json');
    });

    //let xhr2 = new RequestHandler();

    fetch('./data/data2.xml').then( (response) => {
        console.info('[DONE] ./data/data2.xml');
    }, () => {
        console.error('[FAILED] ./data/data2.xml');
    });

});

'use strict';

window.mimeType = {
    "text/plain": ["txt", "rtf"],
    "text/json": ["json"],
    "application/xml": ["xml"]
};
window.addEventListener('load', () => {
    let _setHeader = (url) => {
        let fileType = url.split('.').pop();
        let mimeTypesMap = new Map();
        let header = new Headers();  
        for (let mimeType in mimeType) {
            if (mimeType.hasOwnProperty(mimeType)) {
                mimeTypesMap.set(mimeType, mimeType[mimeType]);
            }
        }

        for (let [key, value] of mimeTypesMap) {
            if (value.includes(fileType)) {
                header.append('Content-Type', key);
            }
        }
        return header;
    }
    
    fetch('./data/data1.json', {header: _setHeader('./data/data1.json')}).then((response) => {
        console.info('[DONE] ./data/data1.json');
    }, () => {
        console.error('[FAILED] ./data/data1.json');
    });

    fetch('./data/data2.xml', {header: _setHeader('./data/data2.xml')}).then((response) => {
        console.info('[DONE] ./data/data2.xml');
    }, () => {
        console.error('[FAILED] ./data/data2.xml');
    });

});

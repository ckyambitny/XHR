'use strict';
class requestHandler {
    constructor() {
        this.contentMap = new Map();
    }

    createMap(mapData="") {
        this.contentMap.set('text/plain', ['txt', 'rtf']);
        this.contentMap.set('text/json', ['json']);
        this.contentMap.set('application/xml', ['xml']);
    }   
    
    fetch(url, callback = (req, res) => { console.log('default cb', res);} ) {
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    let res;
                    if(req.responseXML) {
                        let parser = new DOMParser();
                        res = parser.parseFromString(req.responseXML, 'application/xml');
                    } else {
                        res = JSON.parse(req.responseText);
                    } 
                callback(req, res);
                } else {
                    console.log('err');
                }
            }
        }
        Array.prototype.includes = function (x) {
            return this.indexOf(x) >= 0;
        }
        req.open('GET', url);
        req.send(null);   
        createMap(); 
                        
        let fileType = url.split('.').pop();
        for (let [key,value] of this.contentMap) {
            if (value.includes(fileType)){
                req.setRequestHeader('Content-Type', key);
            }
        }
    }
        
}

module.exports = requestHandler;

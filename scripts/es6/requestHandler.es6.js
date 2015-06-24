'use strict';
class requestHandler {
    fetch(url, callback = (req, res) =>{ console.log('default cb', res);} ) {
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
        //new request for map json
        let mapReq = new XMLHttpRequest();
        mapReq.onreadystatechange = () => {
            if (mapReq === XMLHttpRequest.DONE) {
                if ( mapReq.status === 200) {
                    //tu wiemy ze chcemy Jsona to od razu go obslugujemy
                    let mapRes = JSON.parse(mapRes.responseText);
                    //callback dla mapy,
                } else {
                    console.log('map error');
                }
            }
        }
        mapReq.open('GET', 'maps/maps.json');
        mapReq.send(null);
                        
        let contentMap = new Map();
        contentMap.set('text/plain', ['txt', 'rtf']);
        contentMap.set('text/json', ['json']);
        contentMap.set('application/xml', ['xml']);
        let fileType = url.split('.').pop();
        for (let [key,value] of contentMap) {
            if (value.includes(fileType)){
                req.setRequestHeader('Content-Type', key);
            }
        }
         
        req.send(null);
    }
        
}

module.exports = requestHandler;

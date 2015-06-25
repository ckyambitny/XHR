let mimeType = {};

export default class RequestHandler {
    constructor() {
        this.request = new XMLHttpRequest();
    }

    fetch(url, successCallback = () => {
    }, errorCallback = () => {
    }) {
        this.request.onreadystatechange = () => {
            if (this.request.readyState === XMLHttpRequest.DONE) {
                if (this.request.status === 200) {
                    successCallback(this.request, this._parseResponse());
                } else {
                    errorCallback(this.request);
                }
            }
        };

        this.request.open('GET', url);

        this._updateContentTypeHeader(url);

        this.request.send(null);
    }

    _parseResponse() {
        let res;

        if (this.request.responseXML) {
            let parser = new DOMParser();
            res = parser.parseFromString(this.request.responseXML, 'application/xml');
        } else {
            res = JSON.parse(this.request.responseText);
        }

        return res;
    }

    _updateContentTypeHeader(url) {
        let fileType = url.split('.').pop();
        let mimeTypesMap = new Map();

        for (let mimeType in mimeType) {
            if (mimeType.hasOwnProperty(mimeType)) {
                mimeTypesMap.set(mimeType, mimeType[mimeType]);
            }
        }

        for (let [key, value] of mimeTypesMap) {
            if (value.includes(fileType)) {
                this.request.setRequestHeader('Content-Type', key);
            }
        }
    }

    static parseJSON(json) {
        mimeType = json;
    }
}

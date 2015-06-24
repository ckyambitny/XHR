const mimeTypes = {
    "text/plain": ["txt", "rtf"],
    "text/json": ["json"],
    "application/xml": ["xml"]
};

export default class RequestHandler {
    constructor() {
        this.mimeTypesMap = new Map();
        this.request = new XMLHttpRequest();
    }

    fetch(url, successCallback = () => {}, errorCallback = () => {}) {
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

        // this._updateContentTypeHeader(url);

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

        for (let [key, value] of this.mimeTypesMap) {
            if (value.includes(fileType)) {
                this.request.setRequestHeader('Content-Type', key);
            }
        }
    }
}

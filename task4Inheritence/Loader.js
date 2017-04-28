'use strict';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function Loader() {
  this.api_key = '&api_key='; //'6da0839fa4e19c602f29ee9b377625c3';
  this.method = '';
  this.parameters = '';
}

Loader.prototype.setApiKey = function(api_key) {
  this.api_key += api_key;
}

Loader.prototype.setMethod = function(method) {
  this.method = method;
}

Loader.prototype.addParameter = function(name, value) {
  this.parameters += ('&' + name + '=' + value);
}

Loader.prototype.load = function(queryParams) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', queryParams, true);

    req.send(null);
    req.onreadystatechange = function(aEvt) {
      if (this.readyState !== 4) return;
      if (this.status !== 200) {
        var data = req.responseText;
        reject(this);
        return;
      }
      resolve(this);
    };
  });
};

Loader.prototype.getQueryParams = function() {
  return 'http://ws.audioscrobbler.com/2.0/?method=' + this.method + this.parameters + this.api_key + '&format=json';
};

module.exports = Loader;

'use strict';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function Loader() {
  this.url = 'http://ws.audioscrobbler.com/2.0/?'
  this.api_key = "6da0839fa4e19c602f29ee9b377625c3";
  this.format = "json";
  this.method = '';
}

Loader.prototype.setApiKey = function(api_key) {
  this.api_key += api_key;
}

Loader.prototype.setMethod = function(method) {
  this.method = method;
}

Loader.prototype.setFormat = function(format) {
  this.format = format;
}

Loader.prototype.setUrl = function(url) {
  this.url = url;
}

Loader.prototype.load = function(queryParams) {
  var url = this.getQueryParams(queryParams);
  console.log("url = " + url);
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
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

Loader.prototype.getQueryParams = function(queryParams) {
  var query = [];
  queryParams.api_key = this.api_key;
  queryParams.format = this.format;
  queryParams.method = this.method;
  for (var key in queryParams)
    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key]));
  return this.url + query.join('&');
};

module.exports = Loader;

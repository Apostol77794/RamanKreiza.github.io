'use strict';

var Loader = require('./loader');

function ArtistsList() {
  Loader.apply(this, arguments);
  Loader.prototype.setMethod.apply(this, ['chart.gettopartists']);
}

ArtistsList.prototype = Object.create(Loader.prototype);
ArtistsList.prototype.constructor = ArtistsList;


ArtistsList.prototype.getQueryParams = function() {
  return 'http://ws.audioscrobbler.com/2.0/?method=' + this.method + this.api_key + '&format=json';
};

ArtistsList.prototype.load = function(queryParams) {
  return Loader.prototype.load.apply(this, [queryParams]);
};

module.exports = ArtistsList;

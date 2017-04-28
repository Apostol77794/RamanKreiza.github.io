'use strict';

var Loader = require('./loader');

function ArtistInfo(artistName) {
  Loader.apply(this, arguments);
  Loader.prototype.setMethod.apply(this, ['artist.getinfo']);
  Loader.prototype.addParameter.apply(this, ['artist', artistName]);
}

ArtistInfo.prototype = Object.create(Loader.prototype);
ArtistInfo.prototype.constructor = ArtistInfo;

ArtistInfo.prototype.getQueryParams = function() {
  return 'http://ws.audioscrobbler.com/2.0/?method=' + this.method + this.parameters + this.api_key + '&format=json';
};

ArtistInfo.prototype.load = function(queryParams) {
  return Loader.prototype.load.apply(this, [queryParams]);
};

module.exports = ArtistInfo;

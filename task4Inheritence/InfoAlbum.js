'use strict';

var Loader = require('./loader');

function InfoAlbum(artistName, album) {
  Loader.apply(this, arguments);
  Loader.prototype.setMethod.apply(this, ['album.getinfo']);
  Loader.prototype.addParameter.apply(this, ['artist', artistName]);
  Loader.prototype.addParameter.apply(this, ['album', album]);
}

InfoAlbum.prototype = Object.create(Loader.prototype);
InfoAlbum.prototype.constructor = InfoAlbum;

InfoAlbum.prototype.getQueryParams = function() {
  return 'http://ws.audioscrobbler.com/2.0/?method=' + this.method + this.api_key + this.parameters + '&format=json';
};

InfoAlbum.prototype.load = function(queryParams) {
  return Loader.prototype.load.apply(this, [queryParams]);
};

module.exports = InfoAlbum;

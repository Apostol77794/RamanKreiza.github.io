'use strict';

var Loader = require('./loader');

function SearchArtist(artistName) {
  Loader.apply(this, arguments);
  Loader.prototype.setMethod.apply(this, ['artist.search']);
  Loader.prototype.addParameter.apply(this, ['artist', artistName]);
}

SearchArtist.prototype = Object.create(Loader.prototype);
SearchArtist.prototype.constructor = SearchArtist;

SearchArtist.prototype.getQueryParams = function() {
  return 'http://ws.audioscrobbler.com/2.0/?method=' + this.method + this.api_key + this.parameters + '&format=json';
};

SearchArtist.prototype.load = function(queryParams) {
  return Loader.prototype.load.apply(this, [queryParams]);
};

module.exports = SearchArtist;

'use strict';

var Loader = require('./loader');

function SearchArtist(artistName) {
  Loader.apply(this, arguments);
  Loader.prototype.setMethod.apply(this, ['artist.search']);
}

SearchArtist.prototype = Object.create(Loader.prototype);
SearchArtist.prototype.constructor = SearchArtist;

SearchArtist.prototype.load = function(artistName) {
  var queryParams = {
    artist: artistName
  };
  return Loader.prototype.load.apply(this, [queryParams]);
};

module.exports = SearchArtist;

'use strict';

var Loader = require('./loader');

function ArtistInfo(artistName) {
  Loader.apply(this, arguments);
  Loader.prototype.setMethod.apply(this, ['artist.getinfo']);
}

ArtistInfo.prototype = Object.create(Loader.prototype);
ArtistInfo.prototype.constructor = ArtistInfo;

ArtistInfo.prototype.load = function(artistName) {
  var queryParams = {
    artist: artistName
  };
  return Loader.prototype.load.apply(this, [queryParams]);
};

module.exports = ArtistInfo;

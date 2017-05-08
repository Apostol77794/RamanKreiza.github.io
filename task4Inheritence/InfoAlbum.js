'use strict';

var Loader = require('./loader');

function InfoAlbum(artistName, album) {
  Loader.apply(this, arguments);
  Loader.prototype.setMethod.apply(this, ['album.getinfo']);
}

InfoAlbum.prototype = Object.create(Loader.prototype);
InfoAlbum.prototype.constructor = InfoAlbum;

InfoAlbum.prototype.load = function(artistName, albumName) {
  var queryParams = {
    artist: artistName,
    album: albumName
  };
  return Loader.prototype.load.apply(this, [queryParams]);
};

module.exports = InfoAlbum;

'use strict';

var Loader = require('./loader');

function ArtistsList() {
  Loader.apply(this, arguments);
  Loader.prototype.setMethod.apply(this, ['chart.gettopartists']);
}

ArtistsList.prototype = Object.create(Loader.prototype);
ArtistsList.prototype.constructor = ArtistsList;

ArtistsList.prototype.load = function() {
  var queryParams = {};
  return Loader.prototype.load.apply(this, [queryParams]);
};

module.exports = ArtistsList;

var ArtistsList = require('./ArtistsList');
var SearchArtist = require('./SearchArtist');
var InfoAlbum = require('./InfoAlbum');
var ArtistInfo = require('./ArtistInfo');

console.log("TOP artists");
var artists = new ArtistsList();
var response = artists.load();
response.then(function(res) {
  console.log("Top artists result \n" + res.responseText);
});

console.log("Search artist");
var artist = new SearchArtist();
var response = artist.load("Cher");
response.then(function(res) {
  console.log("Search artist result \n" + res.responseText);
});

console.log("Info album");
var album = new InfoAlbum();
var response = album.load("Cher", 'Believe');
response.then(function(res) {
  console.log("Info album result \n" + res.responseText);
});

console.log("Info artist");
var artist = new ArtistInfo("Cher");
var response = artist.load("Cher");
response.then(function(res) {
  console.log("Info artist result \n" + res.responseText);
});

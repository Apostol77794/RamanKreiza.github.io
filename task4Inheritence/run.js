var ArtistsList = require('./ArtistsList');
var SearchArtist = require('./SearchArtist');
var InfoAlbum = require('./InfoAlbum');
var ArtistInfo = require('./ArtistInfo');

console.log("TOP artists");
var artists = new ArtistsList();
artists.setApiKey('6da0839fa4e19c602f29ee9b377625c3');
var url = artists.getQueryParams();
console.log(url);
var response = artists.load(url);
response.then(function(res) {
  console.log("Top artists result \n" + res.responseText);
});

console.log("Search artist");
var artist = new SearchArtist("Cher");
artist.setApiKey('6da0839fa4e19c602f29ee9b377625c3');
var url = artist.getQueryParams();
console.log(url);
var response = artist.load(url);
response.then(function(res) {
  console.log("Search artist result \n" + res.responseText);
});

console.log("Info album");
var album = new InfoAlbum("Cher", 'Believe');
album.setApiKey('6da0839fa4e19c602f29ee9b377625c3');
var url = album.getQueryParams();
console.log(url);
var response = album.load(url);
response.then(function(res) {
  console.log("Info album result \n" + res.responseText);
});

console.log("Info artist");
var artist = new ArtistInfo("Cher");
artist.setApiKey('6da0839fa4e19c602f29ee9b377625c3');
var url = artist.getQueryParams();
console.log(url);
var response = artist.load(url);
response.then(function(res) {
  console.log("Info artist result \n" + res.responseText);
});

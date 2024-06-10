// Function including with artist name and an album title.
function make_album(artist, title) {
    var album = { artist: artist, title: title };
    return album;
}
console.log(make_album("Atif Aslam", "Tajdare Haram"));
console.log(make_album("Arjit Singh", "Channa Mereya"));
console.log(make_album("Nusrat Ali", "Hai Kahan Ka Iraada"));
// Function including with artist name and an album title and also number of tracks on an album.
function another_album(artist, title, tracks) {
    var album2 = { artist: artist, title: title, tracks: tracks };
    if (tracks) {
        tracks = album2["tracks"];
    }
    return album2;
}
console.log(another_album("Kaife Khalil", "Kahani Suno", 2.0));


// Function including with artist name and an album title.
function make_album(artist: string, title: string) {
    let album = { artist, title};
    return album;
}
console.log(make_album("Atif Aslam", "Tajdare Haram"))
console.log(make_album("Arjit Singh", "Channa Mereya"))
console.log(make_album("Nusrat Ali", "Hai Kahan Ka Iraada"))

// Function including with artist name and an album title and also number of tracks on an album.
function another_album(artist: string, title: string, tracks? : number) {
    let album2 = { artist, title, tracks};
    if (tracks){
        tracks = album2["tracks"]
    }
    return album2;
}
console.log(another_album("Kaife Khalil", "Kahani Suno", 2.0))

var playlist = {
  artistName: songTitle
};

function updatePlaylist(playlist, artistName, songTitle){
playlist.artistName = 'Phil Ochs';
playlist.songTitle = "Here's to the State of Mississippi";
return this.playlist;
};


function removeFromPlaylist(playlist,artistName){
delete playlist.artistName;
};

let playlist = {
  artistName: songTitle
};

function updatePlaylist(playlist, artistName, songTitle){
return playlist.assign({},playlist,{['Phil Ochs']:"Here's to the State of Mississippi"});
};


function removeFromPlaylist(playlist,artistName){
delete playlist.artistName;
};

let playlist = {
  artistName: songTitle
};

function updatePlaylist(playlist,artistName, songTitle){
return playlist.assign({'Phil Ochs':"Here's to the State of Mississippi"});
};

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

function removeFromPlaylist(playlist,artistName){
delete playlist.artistName;
};

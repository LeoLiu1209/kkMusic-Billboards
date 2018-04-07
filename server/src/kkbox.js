const { Auth } = require('@kkbox/kkbox-js-sdk')
const { Api } = require('@kkbox/kkbox-js-sdk')
const auth = new Auth("YOUR CLIENT ID", "YOUR CLIENT SECRET")
var api

module.exports.getClientCredential = function () {
    return new Promise ((resolve, reject) => {
        auth.clientCredentialsFlow.fetchAccessToken().then(credential=>{
            resolve(credential.data)
        })
    })
}

module.exports.getNewHitsPlaylist = function (access_token) {
    return new Promise ((resolve, reject) => {
        api = new Api(access_token)
        api.newHitsPlaylistFetcher.fetchAllNewHitsPlaylists().then(playlist=>{
            resolve(playlist.data)
        })
    }) 
}

module.exports.createWidget = function (musicInfo){
    return new Promise((resolve, reject)=>{
        let widgetURL = "https://widget.kkbox.com/v1/?id="+musicInfo.id+"&type=playlist&terr=TW&lang=EN&autoplay=true&loop=true"
        resolve(widgetURL)
    })
}

/**
     * Fetch track list of a shared playlist.
     * fetchTracks(limit, offset)
     * @param {number} [limit] - The tracks data array size.
     * @param {number} [offset] - The offset index for first element.
**/

module.exports.getTracks = function (playListID){
     let tracksNameAndAuthorList=[]
    return new Promise((resolve, reject)=>{
        api.newHitsPlaylistFetcher.setPlaylistID(playListID).fetchTracks(5).then(res=>{
            let trackList=[]
            trackList=res.data.data
            trackList=trackList.map(tracksInfo=>[tracksInfo.name,tracksInfo.album.artist.name])
            trackList.forEach(function(element) {
                let obj={}
                obj.songName=element[0]
                obj.artist=element[1]
                tracksNameAndAuthorList.push(obj)
            });
            resolve(tracksNameAndAuthorList)
        })
    })
}
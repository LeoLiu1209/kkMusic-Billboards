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

module.exports.createWidget = function (randPlayListInfo){
    return new Promise((resolve, reject)=>{
        let widgetURL = "https://widget.kkbox.com/v1/?id="+randPlayListInfo.id+"&type=playlist&terr=TW&lang=EN&autoplay=true&loop=true"
        resolve(widgetURL)
    })
}
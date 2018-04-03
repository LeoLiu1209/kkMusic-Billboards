const express = require('express')
const kkbox = require('../src/kkbox')
const QRCode = require('../src/qrcode')
const router = express.Router()

router.get('/', function(req, res) {
    let musicInfo={}
    kkbox.getClientCredential().then(credential=>{
       return credential.access_token
    }).then(access_token => {
        return kkbox.getNewHitsPlaylist(access_token)
    }).then(getNewHitsPlaylist => {
        let NewHitsPlaylistLength = getNewHitsPlaylist.summary.total
        let randPlayListInfo = getNewHitsPlaylist.data[Math.floor(Math.random()*NewHitsPlaylistLength)]
        return randPlayListInfo
    }).then(randPlayListInfo => {
        musicInfo = {
            title : randPlayListInfo.title,
            image : randPlayListInfo.images[0].url,
            url : randPlayListInfo.url,
            id : randPlayListInfo.id
        }
        return kkbox.createWidget(randPlayListInfo)
    }).then(widgetURL => {
        return QRCode.QRCodeDataURL(widgetURL)
    }).then(dataURL => {
        res.send({
            dataURL : dataURL,
            message : musicInfo 
        })
    })
    
})

module.exports = router
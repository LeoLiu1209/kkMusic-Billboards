var QRCode = require('qrcode')

module.exports.QRCodeDataURL = function(widgetURL){
    return new Promise((resolve, reject)=>{
        QRCode.toDataURL(widgetURL).then(dataURL=>{
            resolve(dataURL)    
        })
    })
}
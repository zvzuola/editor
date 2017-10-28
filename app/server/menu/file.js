const { dialog } = require('electron')
const fs = require('fs')
const path = require('path')

module.exports = [{
    label: 'File',
    submenu: [{
        label: 'Open...',
        accelerator: 'CmdOrCtrl+O',
        click: (menuItem, browserWindow) => {
            dialog.showOpenDialog({ properties: ['openFile'] }, (filePaths) => {
                if (!filePaths) return;
                let filePath = filePaths[0]
                fs.readFile(filePath, 'utf-8', (err, file) => {
                    browserWindow.webContents.send('file-opened', {
                        file,
                        fileName: path.basename(filePath),
                        filePath
                    })
                })
            })
        }
    }]
}]
import { dialog, ipcMain, BrowserWindow } from 'electron';
import fs from 'fs';

ipcMain.on('save-file', (e, { file, filePath }) => {
  fs.writeFile(filePath, 'utf-8', (err, file) => {
    if (err) console.log(err);
  })
});

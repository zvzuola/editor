export function fileOpened(file, fileName, filePath) {
    return {
        type: 'FILE_OPENED',
        file,
        fileName,
        filePath
    }
}

export function fileChanged(file) {
    return {
        type: 'FILE_CHANGED',
        file
    }
}
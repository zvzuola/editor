export function fileOpened(file, fileName, filePath) {
    return {
        type: 'FILE_OPENED',
        file,
        fileName,
        filePath
    }
}
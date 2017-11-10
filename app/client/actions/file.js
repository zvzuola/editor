export function fileOpened(fileContent, fileName, filePath) {
    return {
        type: 'FILE_OPENED',
        fileContent,
        fileName,
        filePath
    }
}

export function fileChanged(fileContent) {
    return {
        type: 'FILE_CHANGED',
        fileContent
    }
}

export function fileClick(id) {
    return {
        type: 'FILE_CLICK',
        id
    }
}

export function fileClose(id) {
    return {
        type: 'FILE_CLOSE',
        id
    }
}
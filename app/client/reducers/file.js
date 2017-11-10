const fileOpened = (state, file) => {
    return {
        files: {
            ...state.files,
            [file.id]: file
        },
        currentFileId: file.id
    };
}

const fileChanged = (state, fileContent) => {
    return {
        ...state,
        files: {
            ...state.files,
            [state.currentFileId]: {
                ...state.files[state.currentFileId],
                fileContent
            }
        }
    }
}

const fileClose = (state, id) => {
    const { ...otherFiles } = state.files;
    delete otherFiles[id];
    const currentFileId = state.currentFileId;
    let newCurrentFileId = currentFileId;
    if (currentFileId === id) {
        const fileIds = Object.keys(otherFiles);
        if (fileIds.length) {
            newCurrentFileId = fileIds[0];
        } else {
            newCurrentFileId = null;
        }
    }
    return {
        files: { ...otherFiles },
        currentFileId: newCurrentFileId
    }
}

export default function test(state = { files: {}, currentFileId: null }, action) {
    switch (action.type) {
        case 'FILE_OPENED':
            return fileOpened(state, {
                id: `${Date.now()}`,
                fileContent: action.fileContent,
                fileName: action.fileName,
                filePath: action.filePath
            });
        case 'FILE_CHANGED':
            return fileChanged(state, action.fileContent);
        case 'FILE_CLICK':
            return { ...state, currentFileId: action.id }
        case 'FILE_CLOSE':
            return fileClose(state, action.id);
        default:
            return state;
    }
}
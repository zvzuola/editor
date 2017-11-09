const fileOpened = (state, file) => {
    return {
        ...state,
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

export default function test(state = { files: {}, currentFileId: null }, action) {
    switch (action.type) {
        case 'FILE_OPENED':
            return fileOpened(state, {
                id: Date.now(),
                fileContent: action.fileContent,
                fileName: action.fileName,
                filePath: action.filePath
            });
        case 'FILE_CHANGED':
            return fileChanged(state, action.fileContent);
        case 'FILE_CLICK':
            return { ...state, currentFileId: action.id }
        default:
            return state;
    }
}
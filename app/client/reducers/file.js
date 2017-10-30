export default function test(state = { file: '', fileName: '', filePath: '' }, action) {
    switch (action.type) {
        case 'FILE_OPENED':
            return Object.assign({}, state, {
                file: action.file,
                fileName: action.fileName,
                filePath: action.filePath
            });
        case 'FILE_CHANGED':
            return Object.assign({}, state, {
                file: action.file
            });
        default:
            return state;
    }
}
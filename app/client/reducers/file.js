export default function test(state = { file: '', fileName: '', filePath: '' }, action) {
    switch (action.type) {
        case 'FILE_OPENED':
            return Object.assign({}, state, {
                file: action.file,
                fileName: action.fileName,
                filePath: action.filePath
            })
        default:
            return state;
    }
}
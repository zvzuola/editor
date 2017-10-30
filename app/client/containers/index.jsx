import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import reducers from '../reducers';
import FileText from './file';

import * as actions from '../actions/file'
import { ipcRenderer } from 'electron'

let store = createStore(reducers);

ipcRenderer.on('file-opened', (e, { file, fileName, filePath }) => {
    store.dispatch(actions.fileOpened(file, fileName, filePath))
});

ipcRenderer.on('file-save', (e) => {
    ipcRenderer.send('file-save', { filePath: store.getState().file.filePath, file: store.getState().file.file })
    // store.dispatch(actions.fileOpened(file, fileName, filePath))
});

class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={FileText} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
)
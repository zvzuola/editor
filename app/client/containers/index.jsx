import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import reducers from '../reducers';
import FileText from './file';
import Test2 from './test2';

import * as actions from '../actions/file'
import { ipcRenderer } from 'electron'

let store = createStore(reducers);

ipcRenderer.on('file-opened', (e, {file, fileName, filePath}) => {
    store.dispatch(actions.fileOpened(file, fileName, filePath))
})

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
                <ul>
                    <li><Link to="/">test</Link></li>
                    <li><Link to="/test2">Zillow Group</Link></li>
                </ul>
                <Route path="/" component={FileText} />
                <Route path="/test2" component={Test2} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
)
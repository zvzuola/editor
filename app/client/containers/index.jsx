import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import reducers from '../reducers';
import Test from './test';
import Test2 from './test2';


let store = createStore(reducers);

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
                <Route path="/" component={Test} />
                <Route path="/test2" component={Test2} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
)
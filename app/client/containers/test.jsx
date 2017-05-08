import React, { Component } from 'react';
import { connect } from 'react-redux';
class Test extends Component {
    render() {
        return (
            <div>
                hello world{this.props.test[0]}
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return { test: state.test }
}
export default connect(mapStateToProps)(Test);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Editor from '../components/editor';
import * as actions from '../actions/file'

class File extends Component {

    onChange(file) {
        this.props.dispatch(actions.fileChanged(file));
    }

    render() {
        return (
            <div>
                <Editor file={this.props.file} onChange={this.onChange.bind(this)} />
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return { file: state.file.file }
}
export default connect(mapStateToProps)(File);
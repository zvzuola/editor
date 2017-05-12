import React, { Component } from 'react';
import { connect } from 'react-redux';
import Editor from '../components/editor';
class File extends Component {
    render() {
        return (
            <div>
                <Editor file={this.props.file} />
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return { file: state.file.file }
}
export default connect(mapStateToProps)(File);
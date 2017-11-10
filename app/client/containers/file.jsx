import React, { Component } from 'react';
import { connect } from 'react-redux';
import Editor from '../components/editor';
import Head from '../components/head';
import * as actions from '../actions/file'

class File extends Component {

    onChange(fileContent) {
        this.props.dispatch(actions.fileChanged(fileContent));
    }

    onFileClick = (file) => {
        this.props.dispatch(actions.fileClick(file.id));
    }

    onFileClose = (file) => {
        this.props.dispatch(actions.fileClose(file.id));
    }

    render() {
        const { files, currentFileId } = this.props;
        return (
            <div style={{ paddingTop: 30, position: 'relative' }}>
                <Head
                    files={files}
                    currentFileId={currentFileId}
                    onFileClick={this.onFileClick}
                    onFileClose={this.onFileClose}
                />
                {currentFileId && <Editor
                    fileContent={files[currentFileId].fileContent}
                    onChange={this.onChange.bind(this)}
                />}
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        currentFileId: state.file.currentFileId,
        files: state.file.files
    }
}
export default connect(mapStateToProps)(File);
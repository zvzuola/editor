import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sider extends Component {
    getFileTitles() {
        let files = [];
        for (let i in this.props.files) {
            const file = this.props.files[i];
            files.push(<div style={{float: 'left', padding: '0 10px'}} key={i} onClick={() => this.props.onFileClick(file)}>
                {file.fileName}
            </div>)
        }
        return files;
    }
    render() {
        return (
            <div style={{ background: '#252526', height: 30, lineHeight: '30px', color: '#f5f5f5', overflow: 'hidden' }}>
                {this.getFileTitles()}
            </div>
        );
    }
}

Sider.propTypes = {
    files: PropTypes.object.isRequired,
    onFileClick: PropTypes.func.isRequired,
};

export default Sider;
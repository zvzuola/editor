import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

class Sider extends Component {
    getFileTitles() {
        const { currentFileId, files, onFileClick, onFileClose } = this.props;
        let items = [];
        for (let i in files) {
            const file = files[i];
            items.push(<div
                style={{
                    float: 'left',
                    padding: '0 10px',
                    cursor: 'pointer',
                    background: i === String(currentFileId) ? '#1e1e1e' : '#2d2d2d'
                }}
                key={i}
                onClick={() => onFileClick(file)}
            >
                {file.fileName}
                <Icon
                    type="close"
                    style={{ marginLeft: 10 }}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onFileClose(file);
                    }}
                />
            </div>)
        }
        return items;
    }
    render() {
        return (
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    minWidth: '100%',
                    background: 'rgba(60, 60, 60, 1)',
                    height: 30,
                    lineHeight: '30px',
                    color: '#f5f5f5',
                    overflow: 'hidden',
                    zIndex: 10
                }}
            >
                {this.getFileTitles()}
            </div>
        );
    }
}

Sider.propTypes = {
    files: PropTypes.object.isRequired,
    onFileClick: PropTypes.func.isRequired,
    onFileClose: PropTypes.func.isRequired,
};

export default Sider;
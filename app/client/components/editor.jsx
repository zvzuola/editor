import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import ace from 'brace'
import 'brace/mode/html'
import 'brace/theme/github'
import 'brace/ext/searchbox'

class Editor extends Component {

    componentDidMount() {
        this.editor = ace.edit(ReactDom.findDOMNode(this));
        this.editor.$blockScrolling = Infinity;
        this.editor.getSession().setMode('ace/mode/html');
        this.editor.getSession().setUseWrapMode(true);
        this.editor.setTheme('ace/theme/textmate');
        this.editor.setFontSize(14);
        this.editor.on('change', this.onChange.bind(this));
        this.editor.setValue(this.props.fileContent, -1);
        this.editor.setOption('maxLines', 99999);
        this.editor.setOption('minLines', 50);
        this.editor.setOption('highlightActiveLine', true);
        this.editor.setShowPrintMargin(false);
        this.editor.focus();
    }

    componentWillReceiveProps(nextProps) {
        if (this.editor.getValue() !== nextProps.fileContent) {
            this.editor.setValue(nextProps.fileContent, -1);
        }
    }

    componentWillUnmount() {
        this.editor.destroy();
    }

    onChange() {
        this.props.onChange(this.editor.getValue());
    }

    render() {
        return (
            <div></div>
        );
    }
}

Editor.propTypes = {
    fileContent: PropTypes.string.isRequired
};

export default Editor;
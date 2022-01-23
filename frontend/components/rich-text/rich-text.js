import React, { Component } from 'react';
import { convertToRaw, convertFromRaw, EditorState, Editor } from 'draft-js';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';


export default class RichText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paragraph: EditorState.createEmpty(),
            heading: props.heading
        }
    }

    componentDidMount(prevProps) {
        this.importMarkdown();
    }

    onChange = (paragraph) => {
        this.setState({
            paragraph,
        });
    }

    importMarkdown = () => {
        const { paragraph } = this.state;
        this.onChange(EditorState.push(paragraph, convertFromRaw(markdownToDraft(this.props.paragraph))));
    }

    render() {
        return (
            <div >
                <h1>{this.state.heading}</h1>
                <Editor
                    editorState={this.state.paragraph}
                    onChange={this.onChange} readOnly
                />
            </div>
        );
    }
}


import React from 'react';

import ShouldComponentUpdateMixin from '../mixins/ShouldComponentUpdateMixin';

import { deleteChildNode, addChildNode } from '../tree-manager/treeManager';

var TreeNodeView = React.createClass({
  mixins: [ShouldComponentUpdateMixin, React.addons.LinkedStateMixin],


  getInitialState() {
    return {
      editing: false,
      text: ''
    };
  },


  componentWillMount() {
    this.setState({
      text: this.props.node.get('text')
    });
  },


  componentWillReceiveProps(nextProps) {
    // Don't overwrite text state if it is currently edited
    if (this.state.editing) {
      return;
    }

    this.setState({
      text: nextProps.node.get('text')
    })
  },


  onDeleteClick() {
    deleteChildNode(this.props.parentNode, this.props.node);
  },


  onAddChildClick() {
    addChildNode(this.props.node, { text: 'New child' })
  },


  onEditClick() {
    this.setState({
      editing: true
    });
  },


  onSaveClick() {
    this.setState({
      editing: false
    });

    this.props.node.set('text', this.state.text);
  },


  renderDeleteButton() {
    if (!this.props.parentNode) {
      return;
    }

    return (
      <button onClick={this.onDeleteClick}>
        Delete
      </button>
    );
  },


  renderAddChildButton() {
    return (
      <button onClick={this.onAddChildClick}>
        Add child
      </button>
    );
  },


  renderEditButton() {
    if (!this.props.parentNode || this.state.editing) {
      return;
    }

    return (
      <button onClick={this.onEditClick}>
        Edit
      </button>
    );
  },


  renderChildNode(childNode, index) {
    return (
      <TreeNodeView
        key={index}
        node={childNode}
        parentNode={this.props.node}
      />
    );
  },


  renderTextEl() {
    if (this.state.editing) {
      return;
    }

    return (
      <span className='text'>
        {this.state.text}
      </span>
    );
  },


  renderSaveButton() {
    // Show save button only if editing and text is changed
    if (
      !this.state.editing
        ||
      this.state.text === this.props.node.get('text')
    ) {
      return;
    }

    return (
      <button
        onClick={this.onSaveClick}
      >
        Save
      </button>
    )
  },


  renderEditTextEl() {
    if (!this.state.editing) {
      return;
    }

    return (
      <span className='edit'>
        <input
          type='text'
          valueLink={this.linkState('text')}
        />
        {this.renderSaveButton()}
      </span>
    );
  },


  render() {
    return (
      <li>
        {this.renderDeleteButton()}
        {this.renderAddChildButton()}
        {this.renderEditButton()}
        {this.renderTextEl()}
        {this.renderEditTextEl()}

        <ul>
          {this.props.node.get('children').map(this.renderChildNode)}
        </ul>
      </li>
    );
  }
});


export default TreeNodeView;

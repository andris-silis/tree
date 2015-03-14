import React from 'react';

import ShouldComponentUpdateMixin from '../mixins/ShouldComponentUpdateMixin';

import { deleteChildNode, addChildNode } from '../tree-manager/treeManager';

var TreeNodeView = React.createClass({
  mixins: [ShouldComponentUpdateMixin],


  onDeleteClick() {
    deleteChildNode(this.props.parentNode, this.props.node);
  },


  onAddChildClick() {
    addChildNode(this.props.node, { text: 'New child' })
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


  renderChildNode(childNode, index) {
    return (
      <TreeNodeView
        key={index}
        node={childNode}
        parentNode={this.props.node}
      />
    );
  },


  render() {
    return (
      <li>
        {this.renderDeleteButton()}

        {this.renderAddChildButton()}

        <span className='text'>
          {this.props.node.get('text')}
        </span>

        <ul>
          {this.props.node.get('children').map(this.renderChildNode)}
        </ul>
      </li>
    );
  }
});


export default TreeNodeView;

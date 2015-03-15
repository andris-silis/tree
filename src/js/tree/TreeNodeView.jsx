import React from 'react';
import { RaisedButton, IconButton } from 'material-ui';

import ShouldComponentUpdateMixin from '../mixins/ShouldComponentUpdateMixin';

import { deleteChildNode, addChildNode } from '../tree-manager/treeManager';
import TreeNodeEditView from './TreeNodeEditView.jsx';


var TreeNodeView = React.createClass({
  mixins: [ShouldComponentUpdateMixin],

  onDeleteClick() {
    deleteChildNode(this.props.parentNode, this.props.node);
  },


  onAddChildClick() {
    addChildNode(
      this.props.node,
      {
        id: Math.random().toString(36).substring(7),
        text: 'New child'
      }
    );
  },


  renderDeleteButton() {
    if (!this.props.parentNode) {
      return;
    }

    return (
      <IconButton
        tooltip='Delete'
        onClick={this.onDeleteClick}
      >
        <img src='icons/ic_delete_24px.svg' />
      </IconButton>
    );
  },


  renderAddChildButton() {
    return (
      <IconButton
        tooltip='Add child'
        onClick={this.onAddChildClick}
      >
        <img src='icons/ic_add_24px.svg' />
      </IconButton>
    );
  },


  renderChildNode(childNode) {
    return (
      <TreeNodeView
        key={childNode.get('id')}
        node={childNode}
        parentNode={this.props.node}
      />
    );
  },


  renderEditTextEl() {
    return (
      <TreeNodeEditView
        node={this.props.node}
      />
    );
  },


  render() {
    return (
      <li>
        {this.renderDeleteButton()}
        {this.renderAddChildButton()}
        {this.renderEditTextEl()}

        <React.addons.CSSTransitionGroup
          transitionName='fade'
          component='ul'
        >
          {this.props.node.get('children').map(this.renderChildNode)}
        </React.addons.CSSTransitionGroup>
      </li>
    );
  }
});


export default TreeNodeView;

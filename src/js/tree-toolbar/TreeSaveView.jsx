import React from 'react';
import { RaisedButton } from 'material-ui';

import treeStoragePlainManager from '../tree-storage/treeStoragePlainManager';


export default React.createClass({

  onSaveClick() {
    // Save data starting from root node
    treeStoragePlainManager.saveTreeData(this.props.tree.get('children'));
  },


  render() {
    return (
      <span>
        <RaisedButton
          label='Save '
          onClick={this.onSaveClick}
          disabled={this.props.disabled}
        />
        <RaisedButton
          label='Save'
          onClick={this.onSaveClick}
          disabled={this.props.disabled}
        />
      </span>
    );
  }
});

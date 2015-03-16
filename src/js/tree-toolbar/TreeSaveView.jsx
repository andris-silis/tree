import React from 'react';
import { RaisedButton } from 'material-ui';

export default React.createClass({

  onSaveClick() {
    // Save data starting from root node
    this.props.storageManager.saveTreeData(
      this.props.tree.get('children')
    );
  },


  render() {
    return (
      <span>
        <RaisedButton
          label='Save'
          onClick={this.onSaveClick}
          disabled={this.props.disabled}
        />
      </span>
    );
  }
});

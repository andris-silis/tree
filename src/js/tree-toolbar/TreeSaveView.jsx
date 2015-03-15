import React from 'react';
import { RaisedButton } from 'material-ui';


export default React.createClass({

  onSaveClick() {
    // Save data starting from root node
    localStorage.setItem(
      'treeData',
      JSON.stringify(this.props.tree.get('children'))
    );
  },


  render() {
    return (
      <RaisedButton
        label='Save'
        onClick={this.onSaveClick}
        disabled={this.props.disabled}
      />
    );
  }
});

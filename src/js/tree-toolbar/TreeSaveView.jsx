import React from 'react';
import _ from 'lodash';
import { RaisedButton } from 'material-ui';


export default React.createClass({

  onSaveClick() {
    this.props.storageManager.saveTreeData(
      this.props.tree
    );

    if (_.isFunction(this.props.onSave)) {
      this.props.onSave();
    }
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

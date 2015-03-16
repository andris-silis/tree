import React from 'react';
import _ from 'lodash';
import { RaisedButton } from 'material-ui';


export default React.createClass({

  onSaveClick() {
    // Save data starting from root node
    this.props.storageManager.saveTreeData(
      this.props.tree.get('children')
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

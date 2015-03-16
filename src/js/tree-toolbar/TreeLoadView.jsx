import React from 'react';
import { RaisedButton } from 'material-ui';
import _ from 'lodash';

import ShouldComponentUpdateMixin from '../mixins/ShouldComponentUpdateMixin';


export default React.createClass({
  mixins: [ShouldComponentUpdateMixin],

  getInitialState() {
    return {
      hasDataToLoad: false
    };
  },


  componentWillMount() {
    this.updateDataLoadExistenceState(this.props.storageManager);
  },


  componentWillReceiveProps(nextProps) {
    this.updateDataLoadExistenceState(nextProps.storageManager);
  },


  updateDataLoadExistenceState(storageManager) {
    this.setState({
      hasDataToLoad: storageManager.hasTreeData()
    });
  },


  onLoadClick() {
    var treeData = this.props.storageManager.loadTreeData();
    if (!treeData) {
      alert('No tree data in localStorage');
      return;
    }

    this.props.tree.set('children', treeData);

    if (_.isFunction(this.props.onLoad)) {
      this.props.onLoad();
    }
  },


  render() {
    return (
      <RaisedButton
        label='Load'
        onClick={this.onLoadClick}
        disabled={!this.props.storageManager.hasTreeData()}
      />
    );
  }
});

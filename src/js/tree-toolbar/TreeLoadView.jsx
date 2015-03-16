import React from 'react';
import { RaisedButton } from 'material-ui';
import _ from 'lodash';

import ShouldComponentUpdateMixin from '../mixins/ShouldComponentUpdateMixin';

import treeStoragePlainManager from '../tree-storage/treeStoragePlainManager';


export default React.createClass({
  mixins: [ShouldComponentUpdateMixin],

  getInitialState() {
    return {
      hasDataToLoad: false
    };
  },


  componentWillMount() {
    if (!treeStoragePlainManager.hasTreeData()) {
      return;
    }

    this.setState({
      hasDataToLoad: true
    })
  },


  onLoadClick() {
    var treeData = treeStoragePlainManager.loadTreeData();
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
        disabled={!treeStoragePlainManager.hasTreeData()}
      />
    );
  }
});

import React from 'react';
import { DropDownMenu } from 'material-ui';

import TreeLoadView from './TreeLoadView.jsx';
import TreeSaveView from './TreeSaveView.jsx';

import treeStoragePlainManager from '../tree-storage/treeStoragePlainManager';
import treeStorageRecursiveManager from '../tree-storage/treeStorageRecursiveManager';
import treeStorageIterativeManager from '../tree-storage/treeStorageIterativeManager';


export default React.createClass({
  getInitialState() {
    return {
      storageManager: treeStoragePlainManager
    };
  },


  onStorageChoiceChange(e, selectedIndex, menuItem) {
    var choices = {
      plain: treeStoragePlainManager,
      recursive: treeStorageRecursiveManager,
      iterative: treeStorageIterativeManager
    };

    var selectedChoiceKey = menuItem.payload;
    var storageManager = choices[selectedChoiceKey] || choices.plain;

    this.setState({
      storageManager: storageManager
    });
  },


  renderStorageChoicesEl() {
    var choices = [
      { payload: 'plain', text: 'Plain JSON' },
      { payload: 'recursive', text: 'Recursive' },
      { payload: 'iterative', text: 'Iterative' }
    ];

    return (
      <DropDownMenu
        onChange={this.onStorageChoiceChange}
        menuItems={choices}
      />
    );
  },


  render() {
    return (
      <span>
        {this.renderStorageChoicesEl()}

        <TreeLoadView
          tree={this.props.tree}
          storageManager={this.state.storageManager}
        />

        <TreeSaveView
          tree={this.props.tree}
          storageManager={this.state.storageManager}
        />
      </span>
    );
  }
});

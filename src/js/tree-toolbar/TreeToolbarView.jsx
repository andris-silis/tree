import React from 'react';

import { Toolbar } from 'material-ui';

import TreeLoadSaveView from './TreeLoadSaveView.jsx';
import TreeUndoRedoView from './TreeUndoRedoView.jsx';


export default React.createClass({

  render() {
    return (
      <Toolbar>
        <TreeLoadSaveView
          tree={this.props.tree}
        />

        <span className='mui-toolbar-separator'>&nbsp;</span>

        <TreeUndoRedoView
          appState={this.props.appState}
        />
      </Toolbar>
    );
  }
});

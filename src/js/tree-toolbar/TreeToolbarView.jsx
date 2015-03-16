import React from 'react';

import { Toolbar, ToolbarGroup } from 'material-ui';

import TreeUndoView from './TreeUndoView.jsx';
import TreeRedoView from './TreeRedoView.jsx';
import TreeLoadSaveView from './TreeLoadSaveView.jsx';


export default React.createClass({

  render() {
    return (
      <Toolbar className='toolbar'>
        <ToolbarGroup>

          <TreeLoadSaveView
            tree={this.props.tree}
          />

          <span className="mui-toolbar-separator">&nbsp;</span>

          <TreeUndoView
            appState={this.props.appState}
          />
          <TreeRedoView
            appState={this.props.appState}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
});

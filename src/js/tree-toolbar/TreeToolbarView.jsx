import React from 'react';

import { Toolbar, ToolbarGroup } from 'material-ui';

import TreeLoadView from './TreeLoadView.jsx';
import TreeSaveView from './TreeSaveView.jsx';
import TreeUndoView from './TreeUndoView.jsx';
import TreeRedoView from './TreeRedoView.jsx';


export default React.createClass({

  render() {
    return (
      <Toolbar className='toolbar'>
        <ToolbarGroup>
          <TreeLoadView
            tree={this.props.tree}
          />
          <TreeSaveView
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

import React from 'react';
import { ToolbarGroup } from 'material-ui';

import TreeUndoView from './TreeUndoView.jsx';
import TreeRedoView from './TreeRedoView.jsx';

export default React.createClass({
  render() {
    return (
      <ToolbarGroup>
        <TreeUndoView
          appState={this.props.appState}
        />
        <TreeRedoView
          appState={this.props.appState}
        />
      </ToolbarGroup>
    );
  }
});

import React from 'react';

import TreeLoadSaveView from './TreeLoadSaveView.jsx';
import TreeUndoRedoView from './TreeUndoRedoView.jsx';

export default React.createClass({

  render() {
    return (
      <div>
        <TreeLoadSaveView
          tree={this.props.tree}
        />
        <TreeUndoRedoView
          appState={this.props.appState}
        />
      </div>
    );
  }
});

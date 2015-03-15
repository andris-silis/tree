import React from 'react';

import TreeLoadSaveView from './TreeLoadSaveView.jsx';
import TreeUndoRedoView from './TreeUndoRedoView.jsx';

export default React.createClass({

  render() {
    return (
      <div className='toolbar'>
        <TreeLoadSaveView
          tree={this.props.tree}
        />

        <div className='separator'></div>

        <TreeUndoRedoView
          appState={this.props.appState}
        />
      </div>
    );
  }
});

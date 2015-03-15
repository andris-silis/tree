import React from 'react';

import TreeUndoView from './TreeUndoView.jsx';
import TreeRedoView from './TreeRedoView.jsx';

export default React.createClass({
  render() {
    return (
      <div className='button-group'>
        <TreeUndoView
          appState={this.props.appState}
        />
        <TreeRedoView
          appState={this.props.appState}
        />
      </div>
    );
  }
});

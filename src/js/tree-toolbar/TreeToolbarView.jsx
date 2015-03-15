import React from 'react';

import TreeLoadSaveView from './TreeLoadSaveView.jsx';

export default React.createClass({

  render() {
    return (
      <div>
        <TreeLoadSaveView
          tree={this.props.tree}
        />
      </div>
    );
  }
});

import React from 'react';

import TreeLoadView from './TreeLoadView.jsx';
import TreeSaveView from './TreeSaveView.jsx';

export default React.createClass({

  render() {
    return (
      <div>
        <TreeLoadView
          tree={this.props.tree}
        />
        <TreeSaveView
          tree={this.props.tree}
        />
      </div>
    );
  }
});

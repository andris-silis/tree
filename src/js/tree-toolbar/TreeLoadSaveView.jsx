import React from 'react';
import { ToolbarGroup } from 'material-ui';

import TreeLoadView from './TreeLoadView.jsx';
import TreeSaveView from './TreeSaveView.jsx';


export default React.createClass({
  render() {
    return (
      <ToolbarGroup>
        <TreeLoadView
          tree={this.props.tree}
        />
        <TreeSaveView
          tree={this.props.tree}
        />
      </ToolbarGroup>
    );
  }
});

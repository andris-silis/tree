import React from 'react';

import TreeNodeView from './TreeNodeView.jsx';

export default React.createClass({
  render() {
    return (
      <TreeNodeView
        node={this.props.tree}
      />
    );
  }
});

import React from 'react';

import TreeLoadView from './TreeLoadView.jsx';
import TreeSaveView from './TreeSaveView.jsx';


export default React.createClass({
  render() {
    return (
      <div className='button-group'>
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

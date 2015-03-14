import React from 'react';

import ShouldComponentUpdateMixin from '../mixins/ShouldComponentUpdateMixin';

import TreeNodeView from './TreeNodeView.jsx';

export default React.createClass({
  mixins: [ShouldComponentUpdateMixin],

  render() {
    return (
      <TreeNodeView
        node={this.props.tree}
      />
    );
  }
});

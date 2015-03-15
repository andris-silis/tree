import React from 'react';
import { Paper } from 'material-ui';

import ShouldComponentUpdateMixin from '../mixins/ShouldComponentUpdateMixin';

import TreeNodeView from './TreeNodeView.jsx';

export default React.createClass({
  mixins: [ShouldComponentUpdateMixin],

  render() {
    return (
      <Paper zDepth={1}>
        <ul className='tree'>
          <TreeNodeView
            node={this.props.tree}
          />
        </ul>
      </Paper>
    );
  }
});

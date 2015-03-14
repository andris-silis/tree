import React from 'react';

import ShouldComponentUpdateMixin from '../mixins/ShouldComponentUpdateMixin';

var TreeNodeView = React.createClass({
  mixins: [ShouldComponentUpdateMixin],

  renderChildNode(childNode, index) {
    return (
      <TreeNodeView
        key={index}
        node={childNode}
        parentNode={this.props.node}
      />
    );
  },


  render() {
    return (
      <div className='node'>
        <span className='text'>
          {this.props.node.get('text')}
        </span>
        <div className='children'>
          {this.props.node.get('children').map(this.renderChildNode)}
        </div>
      </div>
    );
  }
});


export default TreeNodeView;

import React from 'react';

export default React.createClass({

  onSaveClick() {
    // Save data starting from root node
    localStorage.setItem(
      'treeData',
      JSON.stringify(this.props.tree.get('children'))
    );
  },


  render() {
    return (
      <button
        onClick={this.onSaveClick}
      >
        Save
      </button>
    );
  }
});

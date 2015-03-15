import React from 'react';

export default React.createClass({

  onUndoClick() {
    this.props.appState.undo();
    this.props.appState.emit('swap');
  },


  render() {
    return (
      <button
        onClick={this.onUndoClick}
      >
        Undo
      </button>
    );
  }
});

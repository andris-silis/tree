import React from 'react';

export default React.createClass({

  onRedoClick() {
    this.props.appState.redo();
    this.props.appState.emit('swap');
  },


  render() {
    return (
      <button
        onClick={this.onRedoClick}
      >
        Redo
      </button>
    );
  }
});

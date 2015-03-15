import React from 'react';
import { RaisedButton } from 'material-ui';


export default React.createClass({

  onUndoClick() {
    this.props.appState.undo();
    this.props.appState.emit('swap');
  },


  render() {
    return (
      <RaisedButton
        label='Undo'
        onClick={this.onUndoClick}
      />
    );
  }
});

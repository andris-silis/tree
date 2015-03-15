import React from 'react';
import { RaisedButton } from 'material-ui';


export default React.createClass({

  onRedoClick() {
    this.props.appState.redo();
    this.props.appState.emit('swap');
  },


  render() {
    return (
      <RaisedButton
        label='Redo'
        onClick={this.onRedoClick}
      />
    );
  }
});

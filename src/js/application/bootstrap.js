import immstruct from 'immstruct';

import renderApp from './renderApp';


var bootstrap = () => {
  // Application state structure with history for undo
  var state = immstruct.withHistory('state');

  // Re-render app when data state changes
  state.on('swap', () => {
    renderApp(state);
  });

  renderApp(state);
};


document.addEventListener('DOMContentLoaded', bootstrap, false);

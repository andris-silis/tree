import renderApp from './renderApp';
import initAppState from './initAppState';


var bootstrap = () => {
  var state = initAppState();

  // Re-render app when data state changes
  state.on('swap', () => {
    renderApp(state);
  });

  renderApp(state);
};


document.addEventListener('DOMContentLoaded', bootstrap, false);

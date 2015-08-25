import renderApp from './renderApp';
import initAppState from './initAppState';
import _ from 'lodash';


var bootstrap = () => {
  var state = initAppState();

  var renderWithCurrentState = _.partial(renderApp, state);

  var renderWithCurrentStateOnNextRAF = function () {
    window.requestAnimationFrame(renderWithCurrentState);
  };

  renderWithCurrentStateOnNextRAF();

  state.on('swap', renderWithCurrentStateOnNextRAF);
};

document.addEventListener('DOMContentLoaded', bootstrap, false);

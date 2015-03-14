import React from 'react';

import ApplicationLayoutView from './ApplicationLayoutView.jsx';
import TreeView from '../tree/TreeView.jsx';


export default function (state) {
  var rootNodeCursor = state.cursor('tree');

  React.render(
    <ApplicationLayoutView>
      <TreeView
        tree={rootNodeCursor}
      />
    </ApplicationLayoutView>,
    document.querySelector('.content-wrapper')
  );
};

import React from 'react';

import ApplicationLayoutView from './ApplicationLayoutView.jsx';
import TreeView from '../tree/TreeView.jsx';
import TreeToolbarView from '../tree-toolbar/TreeToolbarView.jsx';


export default function (state) {
  var rootNodeCursor = state.cursor('tree');

  React.render(
    <ApplicationLayoutView>
      <TreeToolbarView
        tree={rootNodeCursor}
      />
      <TreeView
        tree={rootNodeCursor}
      />
    </ApplicationLayoutView>,
    document.querySelector('.content-wrapper')
  );
};

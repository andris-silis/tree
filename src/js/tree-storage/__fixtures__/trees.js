import { List, Map } from 'immutable';

import TreeNodeRecord from '../../tree/TreeNodeRecord';


export var tree = TreeNodeRecord({
  id: 'Root',
  text: 'Root',
  children: List([
    TreeNodeRecord({
      id: 'child-1',
      text: 'child-1',
    }),
    TreeNodeRecord({
      id: 'child-2',
      text: 'child-2',
      children: List([
        TreeNodeRecord({
          id: 'child-2-1',
          text: 'child-2-1',
        })
      ])
    })
  ])
});

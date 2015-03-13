jest.autoMockOff();

import { List, Map } from 'immutable';
import immstruct from 'immstruct';

import TreeNode from '../../tree/TreeNode';

jest.autoMockOn();

export default immstruct({
  tree: TreeNode({
    id: 'root',
    text: 'Root',
    children: List([
      TreeNode({
        id: 'child-1',
        text: 'child-1',
      }),
      TreeNode({
        id: 'child-2',
        text: 'child-2'
      })
    ])
  }),

  treeAfterChildDelete: TreeNode({
    id: 'root',
    text: 'Root',
    children: List([
      TreeNode({
        id: 'child-1',
        text: 'child-1',
      })
    ])
  })
});



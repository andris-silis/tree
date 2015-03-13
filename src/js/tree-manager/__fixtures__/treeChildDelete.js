jest.autoMockOff();

import { List, Map } from 'immutable';

import TreeNode from '../../tree/TreeNode';

jest.autoMockOn();


export var tree = TreeNode({
  text: 'Root',
  children: List([
    TreeNode({
      text: 'child-1',
    }),
    TreeNode({
      text: 'child-2',
      children: List([
        TreeNode({
          text: 'child-2-1',
        })
      ])
    })
  ])
});


export var treeAfterChildDelete = TreeNode({
  text: 'Root',
  children: List([
    TreeNode({
      text: 'child-1',
    })
  ])
});

jest.autoMockOff();

import { List, Map } from 'immutable';

import TreeNodeRecord from '../../tree/TreeNodeRecord';

jest.autoMockOn();


export var tree = TreeNodeRecord({
  text: 'Root',
  children: List([
    TreeNodeRecord({
      text: 'child-1',
    }),
    TreeNodeRecord({
      text: 'child-2',
      children: List([
        TreeNodeRecord({
          text: 'child-2-1',
        })
      ])
    })
  ])
});


export var treeAfterChildDelete = TreeNodeRecord({
  text: 'Root',
  children: List([
    TreeNodeRecord({
      text: 'child-1',
    })
  ])
});


export var treeAfterChildAdd = TreeNodeRecord({
  text: 'Root',
  children: List([
    TreeNodeRecord({
      text: 'child-1',
    }),
    TreeNodeRecord({
      text: 'child-2',
      children: List([
        TreeNodeRecord({
          text: 'child-2-1',
        })
      ])
    }),
    TreeNodeRecord({
      text: 'child-3',
    }),
  ])
});

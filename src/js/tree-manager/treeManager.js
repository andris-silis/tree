import TreeNode from '../tree/TreeNode';

export default {

  deleteChildNode(parentNodeCursor, childNodeCursor) {
    parentNodeCursor.get('children').update(children => {
      var childIndex = children.indexOf(childNodeCursor);
      if (childIndex === -1) {
        return children;
      }

      return children.delete(childIndex);
    });
  },


  addChildNode(parentNodeCursor, data) {
    parentNodeCursor.get('children').update(children => {
      return children.push(
        new TreeNode(data)
      );
    });
  },
};

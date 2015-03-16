import TreeNodeRecord from '../tree/TreeNodeRecord';

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
    data.id = data.id || Math.random().toString(36).substring(7);

    parentNodeCursor.get('children').update(children => {
      return children.push(
        new TreeNodeRecord(data)
      );
    });
  },
};

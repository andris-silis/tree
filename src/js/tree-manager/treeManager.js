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

};

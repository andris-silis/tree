export default {

  deleteChildNode(parentNodeCursor, childNodeCursor) {
    parentNodeCursor.get('children').update(children => {
      return children.delete(children.indexOf(childNodeCursor));
    });
  },

};

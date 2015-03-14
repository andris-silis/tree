import immstruct from 'immstruct';


export default function () {
  // Application state structure with history for undo
  var state = immstruct.withHistory(
    'state',
    {
      tree: {
        id: 'root',
        text: 'Root',
        children: []
      }
    }
  );

  return state;
};

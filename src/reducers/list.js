const addNote = payload => {
  return {
    id: 2+Math.random(),
    title: payload.title,
    description: payload.description
  }
}

const updateNote = (state, payload) => {
  const newState = state.map((note) => {
    if (note.id === parseFloat(payload.id)) {
      return Object.assign({}, note, {
        title: payload.title,
        description: payload.description
      })
    }
    return note
  })
  return newState;
}

const deleteNote = (state, id) => {
  const notes = state.filter(item => item.id !== id);
  return notes;
}

const list = (state = [], action) => {
  let notes = null;
  if (localStorage.getItem('notes') === null) {
    localStorage.setItem('notes', JSON.stringify([]));
  }
  state = JSON.parse(localStorage.getItem('notes'));

  switch (action.type) {
    case 'ADD_NOTE':
      notes = [...state, addNote(action.payload)];
      localStorage.setItem('notes', JSON.stringify(notes));
      return notes;
    case 'UPDATE_NOTE':
      notes = updateNote(state, action.payload);
      localStorage.setItem('notes', JSON.stringify(notes));
      return notes;
    case 'DELETE_NOTE':
      notes = deleteNote(state, parseFloat(action.id));
      localStorage.setItem('notes', JSON.stringify(notes));
      return notes;
    default:
      return state
  }
}

export default list


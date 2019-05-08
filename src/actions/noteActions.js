export const addNote = (title,description) => ({
    type: 'ADD_NOTE',
    payload: {
        title,
        description
    }
})

export const updateNote = (id,title,description) => ({
    type: 'UPDATE_NOTE',
    payload: {
        id,
        title,
        description
    }
})

export const deleteNote = (id) => ({
    type: 'DELETE_NOTE',
    id
})
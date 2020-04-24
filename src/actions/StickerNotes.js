
export const addNotes = () => ({
    type: "ADD_NOTES"
})

export const updateTitle = (id, title) => ({
    type: 'UPDATE_TITLE',
    payload: {
        id,
        title
    }
})

export const updateDescription = (id, description) => ({
    type: 'UPDATE_DESCRIPTION',
    payload: {
        id,
        description
    }
})
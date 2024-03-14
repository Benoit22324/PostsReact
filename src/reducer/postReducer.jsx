export const init = {
    title: '',
    description: '',
    posts: [],
    errorMessage: '',
}

const postReducer = (state, action) => {

    switch(action.type) {
        case 'updateTitle': return {
            ...state,
            title: action.payload,
            errorMessage: '',
        }
        case 'updateDesc': return {
            ...state,
            description: action.payload,
            errorMessage: '',
        }

        case 'addPost': return {
            ...state,
            posts: [...state.posts, {id: action.payload, title: state.title, description: state.description}],
            title: '',
            description: '',
        }

        case 'deletePost': return {
            ...state,
            posts: state.posts.filter((post) => post.id !== action.payload)
        }

        case 'setError': return {
            ...state,
            errorMessage: action.payload
        }

        default: return state
    }
}

export default postReducer
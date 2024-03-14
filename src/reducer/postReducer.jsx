export const init = {
    title: '',
    description: '',
    posts: [],
}

const postReducer = (state, action) => {

    switch(action.type) {
        case 'updateTitle': return {
            ...state,
            title: action.payload
        }
        case 'updateDesc': return {
            ...state,
            description: action.payload
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

        default: return state
    }
}

export default postReducer
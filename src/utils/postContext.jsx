import {createContext, useContext, useReducer} from 'react';
import postReducer, {init} from '../reducer/postReducer.jsx';

const postContext = createContext();

const postConsumer = () => {
    const [state, dispatch] = useReducer(postReducer, init);

    return [state, dispatch]
}

export const usePostContext = () => {
    return useContext(postContext)
}

const PostContextProvider = ({children}) => {
    const value = postConsumer();
    return <postContext.Provider value={value}>
        {children}
    </postContext.Provider>
}

export default PostContextProvider
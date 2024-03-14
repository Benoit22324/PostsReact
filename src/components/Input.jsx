import {usePostContext} from '../utils/postContext.jsx'
import { useState } from 'react';

const Input = () => {
    const [id, setId] = useState(1)
    const [state, dispatch] = usePostContext();

    const updateTitle = (e) => {
        dispatch({type: 'updateTitle', payload: e.target.value})
    }
    const updateDesc = (e) => {
        dispatch({type: 'updateDesc', payload: e.target.value})
    }

    const add = () => {
        dispatch({type: 'addPost', payload: id})
        setId((prev) => prev + 1)
    }

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <label>Votre titre: <input type="text" name="title" value={state.title} onChange={updateTitle}/></label>
                <label>Votre description: <textarea type="text" name="description" value={state.description} onChange={updateDesc}/></label>
                <button onClick={add}>Envoyer</button>
            </div>
        </>
    )
}

export default Input
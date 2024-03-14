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
        if (state.title !== '' && state.description !== '') {
            dispatch({type: 'addPost', payload: id})
            setId((prev) => prev + 1)
        }
        else if (state.title === '' && state.description === '') dispatch({type: 'setError', payload: 'Veuillez saisir un titre et une description'})
        else if (state.title === '' && state.description !== '') dispatch({type: 'setError', payload: 'Veuillez saisir un titre'})
        else if (state.title !== '' && state.description === '') dispatch({type: 'setError', payload: 'Veuillez saisir une description'})
    }

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {
                    state.errorMessage !== '' && <p>{state.errorMessage}</p>
                }
                <label>Votre titre: <input type="text" name="title" value={state.title} onChange={updateTitle} placeholder='Veuillez saisir un titre' /></label>
                <label>Votre description: <textarea type="text" name="description" value={state.description} onChange={updateDesc} placeholder='Veuillez saisir une description' /></label>
                <button onClick={add}>Envoyer</button>
            </div>
        </>
    )
}

export default Input
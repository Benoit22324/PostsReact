import { usePostContext } from "../utils/postContext"

const PostDel = ({id}) => {
    const [_, dispatch] = usePostContext();

    return (
        <>
            <button onClick={() => dispatch({type: 'deletePost', payload: id})}>X</button>
        </>
    )
}

export default PostDel
import { usePostContext } from "../utils/postContext";
import PostTitle from './PostTitle.jsx';
import PostDesc from "./PostDesc.jsx";
import PostDel from "./PostDel.jsx";

const Posts = () => {
    const [state] = usePostContext();

    return (
        <>
            <div>
                {
                    state.posts.length !== 0 ? state.posts.map((item, i) => 
                        <div style={{border: '1px solid white', borderRadius: '15px', textAlign: 'center', padding: '10px'}} key={i}>
                            <PostTitle title={item.title}/>
                            <PostDesc description={item.description}/>
                            <PostDel id={item.id}/>
                        </div>
                        )
                        :
                        <p>Il n'y a pas de post pour l'instant</p>
                }
            </div>
        </>
    )
}

export default Posts
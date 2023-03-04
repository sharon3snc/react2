import {useState} from 'react';

function Likebutton () {
    const [likes, setLikes] = useState(50);
    const [liked,setliked] = useState(false);

    const handleClick = () => {
        if (!liked){
            setLikes(likes=>likes+1);
            setliked(true);
        }
    };

    return(
        <div>
            <p>{likes} {likes===1? 'like': 'likes'}</p>
            <button onClick={handleClick}> {liked? 'Ya te gusta' : 'Me gusta'} </button>
        </div>
    );
}

export default Likebutton;
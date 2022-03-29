import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json()).then(data => setPost(data))
    }, [postId])
    console.log(post)
    const { title, body } = post
    return (
        <div style={{ border: '1px solid black', padding: '1rem', margin: '1rem auto' }}>
            <h2>Here eill show all the post : {postId}</h2>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Post;
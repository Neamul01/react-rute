import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`).then(res => res.json()).then(data => setFriend(data))
    }, [])
    console.log(friend)
    const { name, email } = friend
    return (
        <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
            <div style={{ alignItems: 'center', width: '20rem', margin: '1rem', padding: '1rem', border: '1px solid black', borderRadius: '1rem' }}>
                <h2>Name: {name}</h2>
                <p>Email: {email}</p>
                <p></p>
            </div>
        </div>
    );
};

export default FriendDetails;
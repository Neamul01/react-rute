import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, email, id } = props.friend;

    const navigate = useNavigate();

    const showFriendDetail = () => {
        navigate(`/friend/${id}`)
    }


    return (
        <div style={{ width: '20rem', margin: '1rem auto', padding: '1rem', border: '1px solid black', borderRadius: '1rem' }}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <Link to={'/ friend/' + id}>Show Details</Link>
            <button onClick={showFriendDetail} style={{ padding: '0.5rem 1rem', background: 'grey', border: 'none', borderRadius: '0.2rem', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}> {username}</button>
        </div>
    );
};

export default Friend;
import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <CustomLink to={'/'}>Home </CustomLink>
                <CustomLink to={'/friends'}>Friends </CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
            </nav>
            <h1>Welcome to my router website</h1>
        </div>
    );
};

export default Header;
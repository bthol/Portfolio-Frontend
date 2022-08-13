import React from 'react';
import Photo from './png/ProfileBT.png';

const ProfilePhoto = () => {
    return <img src={Photo} alt="Profile" className="profile-photo" tabIndex={0} title="Profile Image"/>
};
export { ProfilePhoto };
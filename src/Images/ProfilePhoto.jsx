import React from 'react';
import Photo from './png/ProfileBT.png';

const ProfilePhoto = () => {
    return <div className="profile-container">
        <div className="profile-border">
            <img src={Photo} alt="Profile Image" className="profile-photo" title="Profile Image" />
        </div>
    </div>
};
export { ProfilePhoto };
import React from 'react';
import Photo from './png/ProfileBT.png';

const ProfilePhoto = () => {
    return <div className="profile-container">
            <div className="profile-border">
                <img src={Photo} alt="Profile" className="profile-photo" tabIndex={0} title="Profile Image"/>
            </div>
        </div>
};
export { ProfilePhoto };
import React from 'react';
import Photo from './general/Blake_Thollaug_Profile.jpg';

const ProfilePhoto = () => {
    return <div className="profile-container">
        <div className="profile-border">
            <img src={Photo} alt="Profile" className="profile-photo" title="Profile Image" loading="eager" />
        </div>
    </div>
};
export { ProfilePhoto };
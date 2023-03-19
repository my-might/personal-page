import React from 'react';
import './ProfileHeader.scss'

type ProfileHeaderProps = {
    name:string
}

export const ProfileHeader : React.FC<ProfileHeaderProps> = ({name}) => {

    return <div className="profileHeaderWrapper">
        <div className="profileHeader">
            <h2>{name}</h2>
        </div>
        <p>Lviv, Ukraine</p>
        <p></p>
    </div>

}
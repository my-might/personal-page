import './ValeriaProfile.scss';
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';
import { ProfileExperience } from '../ProfileExperience/ProfileExperience';

export const ValeriaProfile = () => {

    return <div className="valeriaProfileWrapper">
        <ProfileHeader name='Valeria Kryvosheieva'/>
        <ProfileInfo />
        <ProfileExperience />
    </div>

}
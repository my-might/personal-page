import { Slider } from "../Slider/Slider"
import './ProfileSoftSkills.scss'
import React from "react";
import { ColorLine } from "../ColorLine/ColorLine";
import { ProfileLanguageSkills } from "../ProfileLanguageSkills/ProfileLanguageSkills";

type ProfileSoftSkillsProps = {

}

export const ProfileSoftSkills : React.FC<ProfileSoftSkillsProps> = () => {

    return <div className="profileSoftSkillsWrapper">
        <Slider sliderHead="Soft skills" wrapHeight={110}>
            <div className="softSkills1">
                <div className="column">
                    <ul>
                        <li>Teamwork</li>
                        <li>Time management</li>
                        <li>Flexibility</li>
                    </ul>
                </div>
                <div className="column">
                    <ul>
                        <li>Problem solving</li>
                        <li>Empathy</li>
                        <li>Concentration</li>
                    </ul>
                </div>
            </div>
            <ColorLine color="black"/>
            <ProfileLanguageSkills />
        </Slider>
    </div>
}
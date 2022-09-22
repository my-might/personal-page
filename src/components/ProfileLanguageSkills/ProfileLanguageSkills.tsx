import { Slider } from "../Slider/Slider"
import './ProfileLanguageSkills.scss'
import React from "react";
import { ColorLine } from "../ColorLine/ColorLine";
import { ProfileInterests } from "../ProfileInterests/ProfileInterests";

type ProfileLanguageSkillsProps = {

}

export const ProfileLanguageSkills : React.FC<ProfileLanguageSkillsProps> = () => {

    return <div className="profileLanguageSkillsWrapper">
        <Slider sliderHead="Language skills" wrapHeight={60}>
                <div className="languageSkills1">
                    <span className="languageSkills1Title">
                        Mother tongues
                    </span>
                    <span className="languageSkills1Value">
                        Ukrainian, Russian
                    </span>
                </div>
                <div className="languageSkills2">
                    <span className="languageSkills2Title">
                        Other languages
                    </span>
                    <span className="languageSkills2Value">
                        English B1-B2
                    </span>
                </div>
                <ColorLine color="black"/>
                <ProfileInterests />
        </Slider>
    </div>

}
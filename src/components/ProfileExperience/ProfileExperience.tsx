import { Slider } from "../Slider/Slider"
import './ProfileExperience.scss'
import React from "react";
import { ProfileEducation } from "../ProfileEducation/ProfileEducation";
import { ColorLine } from "../ColorLine/ColorLine";

type ProfileExperienceProps = {

}

export const ProfileExperience : React.FC<ProfileExperienceProps> = () => {

    return <div className="profileExpirienceWrapper">
        <Slider sliderHead="Experience" wrapHeight={80}>
                <div className="experience1">
                    <span className="experience1Title">
                        Distributed Lab
                    </span>
                    <span className="experience1Value">
                        <br />[April 2022 - now]<br />
                        Golang Developer
                    </span>
                </div>
                <ColorLine color="black"/>
                <ProfileEducation />
        </Slider>
    </div>

}
import { Slider } from "../Slider/Slider"
import './ProfileEducation.scss'
import React from "react";
import { ProfileDigitalSkills } from "../ProfileDigitalSkills/ProfileDigitalSkills";
import { ColorLine } from "../ColorLine/ColorLine";

type ProfileEducationProps = {

}

export const ProfileEducation : React.FC<ProfileEducationProps> = () => {

    return <div className="profileEducationWrapper">
        <Slider sliderHead="Education" wrapHeight={97}>
                <div className="education1">
                    <span className="education1Title">
                        Bachelor in Software Engineering
                    </span>
                    <span className="education1Value">
                        <br />National Technical University of Ukraine "Igor Sikorsky Kyiv<br />
                        Polytechnic Institute", 2020-2024<br />
                        Ukraine, Kyiv
                    </span>
                </div>
                <ColorLine color="black"/>
                <ProfileDigitalSkills />
        </Slider>
    </div>

}
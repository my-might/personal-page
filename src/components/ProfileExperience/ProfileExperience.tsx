import { Slider } from "../Slider/Slider"
import './ProfileExperience.scss'
import React from "react";

type ProfileExperienceProps = {

}

export const ProfileExperience : React.FC<ProfileExperienceProps> = () => {

    return <div className="profileExpirienceWrapper">
        <Slider sliderHead="Experience">
                <div className="experience1">
                    <span className="experience1Title">
                        Distributed Lab
                    </span>
                    <span className="experience1Value">
                        <br />[April 2022 - now]<br />
                        Golang Developer
                    </span>
                </div>
        </Slider>
    </div>

}
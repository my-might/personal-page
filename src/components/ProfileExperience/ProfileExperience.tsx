import { Slider } from "../Slider/Slider"
import './ProfileExperience.scss'
import React from "react";
import { ProfileEducation } from "../ProfileEducation/ProfileEducation";
import { ColorLine } from "../ColorLine/ColorLine";

type ProfileExperienceProps = {

}

export const ProfileExperience : React.FC<ProfileExperienceProps> = () => {

    return <div className="profileExpirienceWrapper">
        <Slider sliderHead="Experience" wrapHeight={290}>
                <div className="experience1">
                    <span className="experience1Title">
                        Distributed Lab
                    </span>
                    <span className="experience1Value">
                        <br />[April 2022 - now]<br />
                        Golang Developer
                    </span>
                </div>

                <div className="experience2">
                    <p></p> 
                    <span className="experience2Title">
                        Academic project “E-database of films and actors” 
                    </span>
                    <span className="experience2Value">
                        <br />[2021]<br />
                        Team Leader
                    </span>
                </div>

                <div className="experience3">
                    <p></p> 
                    <span className="experience3Title">
                        Academic project “Cafeasy”
                    </span>
                    <span className="experience3Value">
                        <br />[2021]<br />
                        Team Member
                    </span>
                </div>

                <div className="experience4">
                    <p></p> 
                    <span className="experience4Title">
                        Academic project “I eat well”
                    </span>
                    <span className="experience4Value">
                        <br />[2021]<br />
                        Technical Director
                    </span>
                </div>
                <ColorLine color="black"/>
                <ProfileEducation />
        </Slider>
    </div>

}
import { Slider } from "../Slider/Slider"
import './ProfileDigitalSkills.scss'
import React from "react";
import { ColorLine } from "../ColorLine/ColorLine";
import { ProfileSoftSkills } from "../ProfileSoftSkills/ProfileSoftSkills";

type ProfileDigitalSkillsProps = {

}

export const ProfileDigitalSkills : React.FC<ProfileDigitalSkillsProps> = () => {

    return <div className="profileDigitalSkillsWrapper">
        <Slider sliderHead="Digital skills" wrapHeight={230}>
                <div className="digitalSkills1">
                    <span className="digitalSkills1Title">
                        Programming languages<br />
                    </span>
                    <span className="digitalSkills1Value">
                        C# (2.5 years), Python (1.5 year), Golang(0.5 year), Solidity(0.5 year), Java (0.5 years)
                    </span>
                </div>
                <div className="digitalSkills2">
                    <span className="digitalSkills2Title">
                    <br />Database management systems<br />
                    </span>
                    <span className="digitalSkills2Value">
                        SQLite, PostgreSQL
                    </span>
                </div>
                <div className="digitalSkills3">
                    <span className="digitalSkills3Title">
                    <br />Operating systems<br />
                    </span>
                    <span className="digitalSkills3Value">
                        Microsoft Windows, Linux Ubuntu, MacOS
                    </span>
                </div>
                <div className="digitalSkills4">
                    <span className="digitalSkills4Title">
                    <br />Other<br />
                    </span>
                    <span className="digitalSkills4Value">
                    Git, OOP, design patterns, data structures, algorithms, blockchain
                    </span>
                </div>
                <ColorLine color="black"/>
                <ProfileSoftSkills />
        </Slider>
    </div>

}
import { Slider } from "../Slider/Slider"
import './ProfileDigitalSkills.scss'
import React from "react";
import { ColorLine } from "../ColorLine/ColorLine";
import { ProfileSoftSkills } from "../ProfileSoftSkills/ProfileSoftSkills";

type ProfileDigitalSkillsProps = {

}

export const ProfileDigitalSkills : React.FC<ProfileDigitalSkillsProps> = () => {

    return <div className="profileDigitalSkillsWrapper">
        <Slider sliderHead="Digital skills" wrapHeight={260}>
                <div className="digitalSkills1">
                    <span className="digitalSkills1Title">
                        Commercial experience<br />
                    </span>
                    <span className="digitalSkills1Value">
                    Golang (1 year), PostgreSQL, RabbitMQ, Unit & Integrated testing, Docker compose,
                    Kubernetes (k9s), Terraform, Gitlab, Solidity, Blockchain technologies
                    </span>
                </div>

                <div className="digitalSkills2">
                    <p></p>
                    <span className="digitalSkills2Title">
                        Other programming languages<br />
                    </span>
                    <span className="digitalSkills2Value">
                        C# (2 years), Python (1 year), Java (1 years)
                    </span>
                </div>
                <div className="digitalSkills3">
                    <span className="digitalSkills3Title">
                    <br />Database management systems<br />
                    </span>
                    <span className="digitalSkills3Value">
                        SQLite, PostgreSQL
                    </span>
                </div>
                <div className="digitalSkills4">
                    <span className="digitalSkills4Title">
                    <br />Other<br />
                    </span>
                    <span className="digitalSkills4Value">
                    Strong applied mathematics skills, OOP, design patterns, documentation, 
                    data structures, algorithms, microservice architecture, rest api
                    </span>
                </div>
                <ColorLine color="black"/>
                <ProfileSoftSkills />
        </Slider>
    </div>
}
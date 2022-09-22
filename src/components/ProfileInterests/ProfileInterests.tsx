import { Slider } from "../Slider/Slider"
import './ProfileInterests.scss'
import React from "react";
import { ColorLine } from "../ColorLine/ColorLine";

type ProfileInterestsProps = {

}

export const ProfileInterests : React.FC<ProfileInterestsProps> = () => {

    return <div className="profileInterestsWrapper">
        <Slider sliderHead="Interests" wrapHeight={125}>
                <div className="interests1">
                    <ul>
                        <li>Yoga</li>
                        <li>Reading</li>
                        <li>Artificial intelligence</li>
                        <li>Psychology</li>
                        <li>Blockchain</li>
                    </ul>
                </div>
                <ColorLine color="black"/>
        </Slider>
    </div>

}
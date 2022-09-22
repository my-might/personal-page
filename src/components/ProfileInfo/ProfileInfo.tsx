import React from "react";
import { ColorLine } from "../ColorLine/ColorLine";
import "./ProfileInfo.scss"

type ProfileInfoProps = {

}

export const ProfileInfo : React.FC<ProfileInfoProps> = () => {
    return <div className="profileInfoWrapper">
        <div className="profileEmail">
            <span className="emailTitle">
                email:
            </span>
            <span className="emailValue">
                krivosheeva.valeria.kp.02@gmail.com
            </span>
        </div>
        <div className="profileLinkedIn">
            <span className="linkedInTitle">
                LinkedIn:
            </span>
            <a href="https://www.linkedin.com/in/valeria-kryvosheieva-25b660228" className="linkedInValue">
                https://www.linkedin.com/in/valeria-kryvosheieva-25b660228
            </a>
        </div>
        <div className="profileGithub">
            <span className="githubTitle">
                GitHub:
            </span>
            <a href="https://github.com/my-might" className="githubValue">
                https://github.com/my-might
            </a>
        </div>

        <p><br />Nationality: Ukrainian<br />
        Date of birth: Sep 13, 2003</p>

       <ColorLine color="black" />
    </div>
}
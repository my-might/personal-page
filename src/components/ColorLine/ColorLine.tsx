import React from 'react';
import './ColorLine.scss'

type ColorLineProps = {
    color:string
}

export const ColorLine : React.FC<ColorLineProps> = ({color}) => {
    return <div className="colorLine">
        <hr 
        style={{
            color: color,
            background: color,
            borderColor: color,
            height: 1,
            width: 300
        }}
    />
    </div>
}
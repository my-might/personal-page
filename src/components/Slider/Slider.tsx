import React, { useEffect, useRef, useState } from "react";
import { ColorLine } from "../ColorLine/ColorLine";
import './Slider.scss'

type SliderProps = {
    sliderHead: string
    children: JSX.Element | JSX.Element[]
    wrapHeight:number
}

export const Slider: React.FC<SliderProps> = ({ children, sliderHead, wrapHeight }) => {
    const sliderBodyRef = useRef<HTMLDivElement>(null);
    const sliderBodyHeight = useRef<number | undefined>();
    const [isOpen, setIsOpened] = useState<boolean>(true);

    useEffect(() => {
        sliderBodyHeight.current = sliderBodyRef.current?.offsetHeight;
    }, [sliderBodyRef])

    const onHeadClick = () => {
        setIsOpened(!isOpen);
    }

    const getSliderBodyTopStyle = () => {
        if (sliderBodyHeight.current) {
            return isOpen ? 0 : -(wrapHeight);
        }
        return 0;
    }

    return <div className="slider">
        <div className="sliderWrapper">
            <div className="sliderHead" onClick={onHeadClick}>
                <h3>{sliderHead}</h3>
            </div>
        </div>
        <div className="sliderBody" ref={sliderBodyRef} style={{ top: getSliderBodyTopStyle() }}>
            {children}
        </div>
    </div>
}
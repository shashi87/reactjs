import React from 'react'
import FrameImg from '../../../assets/images/frame.png'
import CarImg from '../../../assets/images/about-car.png'
import './AboutUs.scss'
import { useTranslation } from "react-i18next";
const AboutUs = () => {
    const { t } = useTranslation();
    const homePage = t("homePage", { returnObjects: true });
    const aboutUs = homePage.aboutUs
    return (
        <>
            <div className='aboutus-wrapper'>
                <div className='container'>
                    <div className='about-content-wrapper'>
                        <div className='about-section-title'>{aboutUs.aboutUs}</div>
                        <div className='about-content'>
                            <div className='about-title'>{aboutUs.text1}</div>
                            <div className='about-description'>
                                {aboutUs.text2}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-bottom-wrap'>
                    <div className='container'>
                        <div className='about-bottom-section'>
                            <div className='about-frame-wrap'>
                                <img src={FrameImg} alt='Frame' />
                            </div>
                            <div className='car-img-wrap'>
                                <img src={CarImg} alt='Frame' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
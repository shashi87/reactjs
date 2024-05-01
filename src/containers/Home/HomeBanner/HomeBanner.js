import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import FrameImg from '../../../assets/images/frame.png'
import FrameImgTab from '../../../assets/images/frame-tab.png'
import CarImg from '../../../assets/images/home-car.png'
import CarImgTab from '../../../assets/images/home-car-tab.png'
import './HomeBanner.scss'
import { useTranslation } from "react-i18next";
const HomeBanner = () => {
    const navigate = useNavigate()
    const { t } = useTranslation();
    const banners = t("banners", { returnObjects: true });
    return (
        <>
            <div className='home-main-wrapper'>
                <div className='home-info-wrapper'>
                    <div className='home-info-detail-wrap'>
                        <div className='home-info-title'>{banners.text1} <br /> {banners.text2}</div>
                        <div className='home-info-description'>
                           {banners.text3}
                        </div>
                    </div>
                    <div className='home-btn-wrap'>
                        <Button variant='primary' onClick={() => navigate('/shop')}>{banners.registerNow}</Button>
                    </div>
                </div>
                <div className='home-img-container'>
                    <div className='car-container'>
                        <picture>
                            <source media="(max-width:991px)" srcSet={CarImgTab} />
                            <img src={CarImg} alt='Car' />
                        </picture>
                    </div>
                    <div className='frame-container'>
                        <picture>
                            <source media="(max-width:991px)" srcSet={FrameImgTab} />
                            <img src={FrameImg} alt='Frame' />
                        </picture>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner
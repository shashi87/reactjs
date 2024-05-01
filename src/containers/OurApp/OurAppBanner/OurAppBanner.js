import React from 'react'
import Button from 'react-bootstrap/Button';
import HandheldiPhone from '../../../assets/images/handheld-iPhone.png'
import ApppleAppIcon from '../../../assets/images/apple-app-icon.svg'
import GoogleAppIcon from '../../../assets/images/google-app-icon.svg'
import './OurAppBanner.scss'
import { useTranslation } from "react-i18next";

const OurAppBanner = () => {
    const { t } = useTranslation();
    const banner = t("ourApp", { returnObjects: true });
  return (
    <>
    <div className='ourapp-banner-wrapper'>
        <div className='ourapp-banner'>
            <div className='ourapp-content-wrap'>
                <div className='ourapp-title-wrapper'>
                    <h1>{banner.heading1}</h1>
                    <p>{banner.description1}</p>
                </div>
                <div className='view-product-wrap'><Button  variant='primary' as="button">{banner.text1}</Button></div>
                <div className='app-icon-container'>
                    <div className='app-icon'>
                        <img src={GoogleAppIcon} alt='Google' />
                    </div>
                    <div className='app-icon'>
                        <img src={ApppleAppIcon} alt='Apple'/>
                    </div>
                </div>
            </div>
            <div className='handheld-iPhone'>
                <img src={HandheldiPhone} alt='Our App' />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default OurAppBanner
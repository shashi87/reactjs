import React from 'react'
import FeatureImg from '../../../assets/images/features.png'
import './OurFeatures.scss'
import { useTranslation } from "react-i18next";

const OurFeatures = () => {
    const { t } = useTranslation();
    const feature = t("ourApp", { returnObjects: true });
  return (
    <>
    <div className='our-features-wrapper'>
        <div className='our-features'>
            <div className='our-features-content-wrap'>
                <div className='our-features-content'>
                    <div className='our-features-title'>{feature.heading3}</div>
                    <div className='our-features-description'>{feature.description3}</div>
                </div>
                <div className='our-features-list'>
                    <div className='features-list'>{feature.feature1}</div>
                    <div className='features-list'>{feature.feature2}</div>
                    <div className='features-list'>{feature.feature3}</div>
                    <div className='features-list'>{feature.feature4}</div>
                    <div className='features-list'>{feature.feature5}</div>
                    <div className='features-list'>{feature.feature6}</div>
                </div>
            </div>
            <div className='our-feature-img-wrap'>
                <img src={FeatureImg} alt='App'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default OurFeatures
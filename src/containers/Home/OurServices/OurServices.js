import React from 'react'
import { TickMark } from '../../../assets/Icons'
import JustTrack from '../../../assets/images/just-track.png'
import VehicleTraking from '../../../assets/images/vehicle-tracking.png'
import TrackingAlert from '../../../assets/images/tracking-alert.png'
import './OurServices.scss'
import { useTranslation } from "react-i18next";
const OurServices = () => {
    const { t } = useTranslation();
    const homePage = t("homePage", { returnObjects: true });
    const ourServices = homePage.ourServices
    return (
        <>
            <div className='our-services-wrapper'>
                <div className='container'>
                    <div className='os-content-container'>
                        <div className='os-heading-wrap'>
                            <div className='os-heading'>{ourServices.ourServices}</div>
                            <div className='os-description'>{ourServices.text1}</div>
                        </div>
                        <div className='os-container'>
                            <div className='os-row'>
                                <div className='os-img-wrap'>
                                    <img src={JustTrack} alt='Just Track' />
                                </div>
                                <div className='os-wrapper'>
                                    <div className='os-tag'>
                                        <span>{ourServices.service1}</span>
                                    </div>
                                    <div className='os-info-wrap'>
                                        <div className='os-title-wrap'>
                                            {ourServices.justTrack}<br />
                                            <span>{ourServices.vehicleTracking}</span>
                                        </div>
                                        <div className='os-list-wrap'>
                                            <div className='os-list-row'>
                                                <div className='os-list-icon'><TickMark /></div>
                                                <div className='os-list-content'>{ourServices.text2}</div>
                                            </div>
                                            <div className='os-list-row'>
                                                <div className='os-list-icon'><TickMark /></div>
                                                <div className='os-list-content'>{ourServices.text3}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='os-row vehicle-alert'>
                                <div className='os-img-wrap'>
                                    <img src={VehicleTraking} alt='Vehicle Track' />
                                </div>
                                <div className='os-wrapper'>
                                    <div className='os-tag'>
                                        <span>{ourServices.service2}</span>
                                    </div>
                                    <div className='os-info-wrap'>
                                        <div className='os-title-wrap'>
                                            {ourServices.text4}
                                            <br />
                                            <span>{ourServices.text5}</span>
                                        </div>
                                        <div className='os-list-wrap'>
                                            <div className='os-list-row'>
                                                <div className='os-list-icon'><TickMark /></div>
                                                <div className='os-list-content'>{ourServices.text6}</div>
                                            </div>
                                            <div className='os-list-row'>
                                                <div className='os-list-icon'><TickMark /></div>
                                                <div className='os-list-content'>{ourServices.text7}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='os-row'>
                                <div className='os-img-wrap'>
                                    <img src={TrackingAlert} alt='Traking Alert' />
                                </div>
                                <div className='os-wrapper'>
                                    <div className='os-tag'>
                                        <span>{ourServices.service3}</span>
                                    </div>
                                    <div className='os-info-wrap'>
                                        <div className='os-title-wrap'>
                                        {ourServices.text8}<br />
                                            <span>{ourServices.text9}</span>
                                        </div>
                                        <div className='os-list-wrap'>
                                            <div className='os-list-row'>
                                                <div className='os-list-icon'><TickMark /></div>
                                                <div className='os-list-content'>{ourServices.text10}</div>
                                            </div>
                                            <div className='os-list-row'>
                                                <div className='os-list-icon'><TickMark /></div>
                                                <div className='os-list-content'>{ourServices.text11}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices
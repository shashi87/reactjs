import React from 'react'
import Button from 'react-bootstrap/Button';
import VehicleSignalView from '../../../assets/images/vehicle-single.png'
import MapSelected from '../../../assets/images/map-selected.png'
import ApppleAppIcon from '../../../assets/images/apple-app-icon.svg'
import GoogleAppIcon from '../../../assets/images/google-app-icon.svg'
import AppMapView from '../../../assets/images/app-map-view.png'
import './TheSolution.scss'
import { useTranslation } from "react-i18next";

const TheSolution = () => {
    const { t } = useTranslation();
    const solution = t("ourApp", { returnObjects: true });
    return (
        <>
            <div className='solution-main-wrapper'>
                <div className='solution-container'>
                    <div className='solution-content-wrap'>
                        <div className='solution-title'>{solution.heading4}</div>
                        <div className='solution-description'>{solution.description4}</div>
                        <div className='btn-wrap'><Button variant='light'>{solution.text1}</Button></div>
                        <div className='app-icon-container'>
                            <div className='app-icon'>
                                <img src={GoogleAppIcon} alt='Google' />
                            </div>
                            <div className='app-icon'>
                                <img src={ApppleAppIcon} alt='Apple' />
                            </div>
                        </div>
                    </div>

                    <div className='solution-app-view'>
                        <div className='app-view'>
                            <img src={VehicleSignalView} alt='App' />
                        </div>
                        <div className='app-view'>
                            <img src={MapSelected} alt='App' />
                        </div>
                        <div className='app-view'>
                            <img src={AppMapView} alt='App' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TheSolution
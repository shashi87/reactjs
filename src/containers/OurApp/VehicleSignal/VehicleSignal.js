import React from 'react'
import Button from 'react-bootstrap/Button';
import VehicleSignalView from '../../../assets/images/vehicle-single.png'
import MapSelected from '../../../assets/images/map-selected.png'
import AppMapView from '../../../assets/images/app-map-view.png'
import './VehicleSignal.scss'
import { useTranslation } from "react-i18next";

const VehicleSignal = () => {
    const { t } = useTranslation();
    const vehicleSignal = t("ourApp", { returnObjects: true });
    return (
        <>
            <div className='vehicle-main-wrapper'>
                <div className='vehicle-wrapper'>
                    <div className='vehicle-left'>
                        <div className='vehicle-content-wrapper'>
                            <div className='vehicle-title'>{vehicleSignal.heading2}</div>
                            <div className='vehicle-description'>{vehicleSignal.description2}</div>
                        </div>
                        <div className='btn-wrap'><Button variant='primary' as="button">{vehicleSignal.text1}</Button>  <Button variant='secondary' as="button">{vehicleSignal.text2}</Button></div>
                    </div>
                    <div className='vehicle-right'>
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

export default VehicleSignal
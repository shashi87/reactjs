import React from 'react'
import { ShieldIcon } from '../../../assets/Icons'
import Logo from '../../../assets/images/novotrack-logo.svg'
import Button from 'react-bootstrap/Button';
import './Shield.scss'
import { useTranslation } from "react-i18next";

const Shield = () => {
    const { t } = useTranslation();
    const homePage = t("homePage", { returnObjects: true });
    const shield = homePage.shield
    const secure = homePage.secure
    const vts = homePage.s5vts
    return (
        <>
            <div className='services-wrapper'>
                <div className='container'>
                    <div className='service-content-wrapper'>
                        <div className='service-col'>
                            <div className='badge-wrapper'>
                                <div className='badge'><img src={Logo} alt='NovoTrack' /></div>
                            </div>
                            <div className='service-title'>{shield.shield}</div>
                            <div className='service-list-wrapper'>
                                <div className='service-list-row'>
                                    <div className='shield-icon'><ShieldIcon /></div>
                                    <div className='service-content'>{shield.text1}</div>
                                </div>
                                <div className='service-list-row'>
                                    <div className='shield-icon'><ShieldIcon /></div>
                                    <div className='service-content'>{shield.text2}</div>
                                </div>
                                <div className='service-list-row'>
                                    <div className='shield-icon'><ShieldIcon /></div>
                                    <div className='service-content'>{shield.text3}</div>
                                </div>
                                <div className='service-list-row'>
                                    <div className='shield-icon'><ShieldIcon /></div>
                                    <div className='service-content'>{shield.text4}</div>
                                </div>
                            </div>
                            <div className='divider'></div>
                            <div className='additional-info-wrap'>
                                <div className='additional-info-title'>{shield.additionalInfo.additionalInfo}</div>
                                <div className='additional-info-description'>{shield.additionalInfo.description}</div>
                                <ul className='additional-info-list'>
                                    <li>{shield.additionalInfo.text1}</li>
                                    <li>{shield.additionalInfo.text2}</li>
                                    <li>{shield.additionalInfo.text3}</li>
                                    <li>{shield.additionalInfo.text4}</li>
                                </ul>
                            </div>
                            <div className='enquire'>
                                <Button variant='primary' as='button'>{homePage.enquireNow}</Button>
                            </div>
                        </div>
                        <div className='service-col'>
                            <div className='badge-wrapper'>
                                <div className='badge'><img src={Logo} alt='NovoTrack' /></div>
                            </div>
                            <div className='service-title'>{secure.secure}</div>
                            <div className='service-list-wrapper'>
                                <div className='service-list-row'>
                                    <div className='shield-icon'><ShieldIcon /></div>
                                    <div className='service-content'>{secure.text1}</div>
                                </div>
                                <div className='service-list-row'>
                                    <div className='shield-icon'><ShieldIcon /></div>
                                    <div className='service-content'>{secure.text2}</div>
                                </div>
                                <div className='service-list-row'>
                                    <div className='shield-icon'><ShieldIcon /></div>
                                    <div className='service-content'>{secure.text3}</div>
                                </div>
                                <div className='service-list-row'>
                                    <div className='shield-icon'><ShieldIcon /></div>
                                    <div className='service-content'>{secure.text4}</div>
                                </div>
                            </div>
                            <div className='divider'></div>
                            <div className='additional-info-wrap'>
                            <div className='additional-info-title'>{secure.additionalInfo.additionalInfo}</div>
                                <div className='additional-info-description'>{secure.additionalInfo.description}</div>
                                <ul className='additional-info-list'>
                                    <li>{secure.additionalInfo.text1}</li>
                                    <li>{secure.additionalInfo.text2}</li>
                                    <li>{secure.additionalInfo.text3}</li>
                                    <li>{secure.additionalInfo.text4}</li>
                                </ul>
                            </div>
                            <div className='enquire'>
                                <Button variant='primary' as='button'>{homePage.enquireNow}</Button>
                            </div>
                        </div>
                        <div className='service-col'>
                            <div className='badge-wrapper'>
                                <div className='badge'><img src={Logo} alt='NovoTrack' /></div>
                            </div>
                            <div className='service-title'>{vts.s5vts}</div>
                            <div className='service-list-wrapper'>
                                <div className='service-list-row'>
                                    <div className='shield-icon'><ShieldIcon /></div>
                                    <div className='service-content'>{vts.text1}</div>
                                </div>
                                <div className='service-list-row'>
                                    <div className='shield-icon'><ShieldIcon /></div>
                                    <div className='service-content'>{vts.text2}</div>
                                </div>
                                <div className='service-list-row'>
                                    <div className='shield-icon'><ShieldIcon /></div>
                                    <div className='service-content'>{vts.text3}</div>
                                </div>
                                <div className='service-list-row'>
                                    <div className='shield-icon'><ShieldIcon /></div>
                                    <div className='service-content'>{vts.text4}</div>
                                </div>
                            </div>
                            <div className='divider'></div>
                            <div className='additional-info-wrap'>
                            <div className='additional-info-title'>{vts.additionalInfo.additionalInfo}</div>
                                <div className='additional-info-description'>{vts.additionalInfo.description}</div>
                                <ul className='additional-info-list'>
                                    <li>{vts.additionalInfo.text1}</li>
                                    <li>{vts.additionalInfo.text2}</li>
                                    <li>{vts.additionalInfo.text3}</li>
                                    <li>{vts.additionalInfo.text4}</li>
                                </ul>
                            </div>
                            <div className='enquire'>
                                <Button variant='primary' as='button'>Enquire Now</Button>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shield
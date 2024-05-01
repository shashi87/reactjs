import React from 'react'
import './PlansBanner.scss'
import { useTranslation } from "react-i18next";
const PlansBanner = () => {
    const { t } = useTranslation();
    const plansBanner = t("plansBanner", { returnObjects: true });
    return (
        <>
            <div className='plans-banner-wrapper'>
                <div className='plans-info-wrapper'>
                    <div className='plans-info-detail-wrap'>
                        <div className='plans-info-title'>{plansBanner.text1}</div>
                        <div className='plans-info-description'>
                            {plansBanner.text2}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlansBanner
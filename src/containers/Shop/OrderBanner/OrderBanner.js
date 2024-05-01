import React from 'react'
import CarImg from '../../../assets/images/order-car.png'
import './OrderBanner.scss'
import { useTranslation } from "react-i18next";
const OrderBanner = () => {
  const { t } = useTranslation();
  const orderBanner = t("orderBanner", { returnObjects: true });
  return (
    <div className='order-banner-container'>
      <div className='order-banner'>
     <div className='ob-content-wrap'>
     <div className='order-container'>
       <div className='ob-title-wrapper'>
        <div className='ob-title'>{orderBanner.text1} <br/> {orderBanner.text2}</div>
        <div className='ob-subtitle'>{orderBanner.text3}</div>
       </div>
       <div className='car-img-wrap'>
       <img src={CarImg} alt="car" />
       </div>
      </div>
     </div>

      </div>
    </div>
  )
}

export default OrderBanner
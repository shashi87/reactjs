import React from 'react'
import { useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Purchase.scss'
import CarImg from '../../../assets/images/order-car.png'
import { useTranslation } from "react-i18next";
const Purchase = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const purchase = t("purchase", { returnObjects: true });
 
  return (
    <>
      
       <div className='purchase-container'>
          <div className='purchase-wrapper'>
            <div><Button variant="primary" onClick={() => navigate('/shop')}>{purchase.orderNow}</Button></div>
            <div className='purchase-link'>{purchase.text1}<br /><span onClick={() => navigate('/contactus')}>{purchase.contactUs}</span></div>
          </div>
          <div className='car-img-wrap'>
          <img src={CarImg} alt='Car' />
          </div>
          </div>
      
    </>
  )
}

export default Purchase
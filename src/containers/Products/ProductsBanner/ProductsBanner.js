import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ProductsBanner.scss'
import { useTranslation } from "react-i18next";
const ProductsBanner = () => {
    const { t } = useTranslation();
    const productsBanner = t("productsBanner", { returnObjects: true });
    return (
        <>
            <div className='product-banner-wrapper'>
                <div className='product-info-wrapper'>
                    <div className='product-info-detail-wrap'>
                        <div className='product-info-title'>{productsBanner.text0}</div>
                        <div className='product-info-description'>
                        {productsBanner.text1}
                            
                        </div>
                        
                    </div>
                   <div className='product-serch-wrap'>
                        <div className='product-search'>
                                <Form.Control type="text" placeholder="Search Our Product/Services" />
                        </div>
                        <div className='btn-wrap'><Button variant='primary' type='submit'>{productsBanner.search}</Button></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductsBanner
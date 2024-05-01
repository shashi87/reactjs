import React, {useEffect} from 'react'
import ChooseVehicleType from './ChooseVehicleType/ChooseVehicleType'
import OrderBanner from './OrderBanner/OrderBanner'
import Purchase from './Purchase/Purchase'

const Index = () => {
    useEffect(() => {
        document.body?.classList?.add('remove-body-padding');
        document.getElementById('header')?.classList?.add('header-bg-blue')
        return () => {
            document.body?.classList.remove('remove-body-padding');
            document.getElementById('header')?.classList?.remove('header-bg-blue')
        };
    }, []);
    return (
        <>
            <OrderBanner />
            <ChooseVehicleType />
            <Purchase />
        </>
    )
}

export default Index
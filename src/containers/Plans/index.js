import React, {useEffect} from 'react'
import PlansBanner from './PlansBanner/PlansBanner'
import Product from './ChooseVehicleType/ChooseVehicleType'
import ServiceCoverage from './ServiceCoverage/ServiceCoverage';
import PlansDetail from './PlansDetail/PlansDetail';
import JoinUs from './../../components/Common/JoinUs/JoinUs';
import OurProduct from './OurProducts/OurProduct';
import { useMyContext } from '../../utils/ContextApi/Context';

const Index = () => {
    useEffect(() => {
        document.body?.classList.add('remove-body-padding');
        document.getElementById('header')?.classList.add('header-bg-blue')
        return () => {
            document.body.classList.remove('remove-body-padding');
            document.getElementById('header')?.classList.remove('header-bg-blue')
        };
    }, []);
    const hostname = window.location.hostname;

      const { values, handleChange } = useMyContext();

    const handleInputChange = (e) => {
      handleChange(e.target.value);
    };

  return (
    <>
    <PlansBanner/>
    {hostname === "localhost" ? <OurProduct /> : "" }
    <Product values={values} onChange={handleInputChange}/>
    <PlansDetail values={values} onChange={handleInputChange}/>    
    <ServiceCoverage/>
    <JoinUs/>
    </>
  )
}

export default Index;
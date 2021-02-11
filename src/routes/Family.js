
import Family from '../components/Family'
import layout from '../components/layout/layout'

const FamilyRoutes = [
    {
      path: "/family",
      exact: true,
      layout: layout,   
    component: Family
    }
  
  ];
  
  export default FamilyRoutes;
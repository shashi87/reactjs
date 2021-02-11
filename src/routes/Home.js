
import home from '../components/Home'
import layout from '../components/layout/layout'

const HomeRoutes = [
    {
      path: "/",
      exact: true,
      layout: layout,   
    component: home
    }
  
  ];
  
  export default HomeRoutes;
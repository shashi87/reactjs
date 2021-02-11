
import Search from '../components/Search'
import layout from '../components/layout/layout'

const SearchRoutes = [
    {
      path: "/search",
      exact: true,
      layout: layout,   
    component: Search
    }
  
  ];
  
  export default SearchRoutes;
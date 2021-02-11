import React from "react";
import Main from "./pages";
import './App.css';

// Redux setup
import { Provider } from "react-redux";
import store from "./redux/store";

// Font Families
import './fonts/FontsFree-Net-SFProDisplay-Regular.ttf';

// Antd CSS
import "antd/dist/antd.css";

const App = () => {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  )
}
export default App;

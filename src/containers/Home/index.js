import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import OurServices from "./OurServices/OurServices";
import AboutUs from "./AboutUs/AboutUs";
import JoinUs from "./../../components/Common/JoinUs/JoinUs";
import Shield from "./Shield/Shield";

const index = () => {
  const hostname = window.location.hostname;
  return (
    <>
      <HomeBanner />
      {hostname === "www.novotrack.co.uk" ? <Shield /> : <OurServices />}
      <AboutUs />
      <JoinUs />
    </>
  );
};

export default index;

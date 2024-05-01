import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
// import EuropeBasicMap from '../../../assets/images/europe-basic.png'
// import EuropeExtendedMap from '../../../assets/images/europe-extended.png'
// import Global from '../../../assets/images/global.png'
import Flag from "../../../assets/images/flags/Flags.png";
import "./Coverage.scss";

const Coverage = () => {
  return (
    <>
      <div className="coverage-container-wrap">
        <div className="container">
          <div className="coverage-content-wrapper">
            <div className="coverage-section-title">Coverage</div>
            <div className="cc-container">
              <div className="cc-map-wraper">
                <iframe
                  src="https://safetag-website-content.s3.eu-west-2.amazonaws.com/coverage-zone-maps/696527.html"
                  title="European Basic Map"
                ></iframe>

                {/* <img src={EuropeBasicMap} alt='World Map' /> */}
              </div>
              <div className="cc-country-wrap">
                <div className="cc-country-title">Europe Basic</div>
                <div className="country-list-wrap">
                  <div className="country-list-title">Country List</div>
                  <Scrollbars autoHide style={{ height: "100%" }}>
                    <div className="country-list">
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Austria</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Belgium</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Bulgaria</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Croatia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Czech Republic</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Denmark</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Estonia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Finland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">France</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Germany</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Greece</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Hungary</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Iceland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Ireland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Italy</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Latvia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Lithuania</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Netherland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Norway</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Poland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Portugal</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Romania</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Slovenia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Spain</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Sweden</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">United Kingdom</div>
                      </div>
                    </div>
                    
                  </Scrollbars>
                </div>
              </div>
            </div>
            <div className="cc-container">
              <div className="cc-map-wraper">
                <iframe
                  src="https://safetag-website-content.s3.eu-west-2.amazonaws.com/coverage-zone-maps/714798.html"
                  title="European Extended Map"
                ></iframe>
                {/* <img src={EuropeExtendedMap} alt='World Map' /> */}
              </div>
              <div className="cc-country-wrap">
                <div className="cc-country-title">Europe Extended</div>
                <div className="country-list-wrap">
                  <div className="country-list-title">Country List</div>
                  <Scrollbars autoHide style={{ height: "100%" }}>
                  <div className="country-list">
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Austria</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Basnia and Herzegovina</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Belareus</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Belgium</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Bulgaria</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Croatia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Czech Republic</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Denmark</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Estonia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Finland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">France</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Germany</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Greece</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Hungary</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Iceland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Ireland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Italy</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Latvia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Lithuania</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Moldova</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Netherland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Norway</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Poland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Portugal</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Romania</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Russia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Serbia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Slovenia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Spain</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Sweden</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Switzerland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Ukraine</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">United Kingdom</div>
                      </div>
                    </div>
                  </Scrollbars>
                </div>
              </div>
            </div>
            <div className="cc-container">
              <div className="cc-map-wraper">
                <iframe
                  src="https://safetag-website-content.s3.eu-west-2.amazonaws.com/coverage-zone-maps/714797.html"
                  title="Global Basic Map"
                ></iframe>
                {/* <img src={Global} alt='World Map' /> */}
              </div>
              <div className="cc-country-wrap">
                <div className="cc-country-title">Global</div>
                <div className="country-list-wrap">
                  <div className="country-list-title">Country List</div>
                  <Scrollbars autoHide style={{ height: "100%" }}>
                  <div className="country-list">
                  <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Argentina</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Austria</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Algeria</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Australia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Azerbaijan</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Burkina Faso</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Basnia and Herzegovina</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Belareus</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Belgium</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Brazil</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Bulgaria</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Canada</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Croatia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Chile</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Colombia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Czech Republic</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Denmark</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Ecuador</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Estonia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Finland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">France</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Germany</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Greece</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Guyane</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Hungary</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Iceland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Ireland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Italy</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Iran</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Iraq</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">India</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Japan</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Latvia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Lithuania</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Kazakhstan</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Moldova</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Mongolia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Montenegro</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Mexico</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Malaysia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Mozambique</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Myanmar</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Netherland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Norway</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">New Zealand</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Nigeria</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Pakistan</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Paraguay</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Peru</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Poland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Portugal</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Phillippines</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Romania</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Russia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Serbia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Slovakia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Slovenia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Spain</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Svalbard and Janmayen</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">South Korea</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Sweden</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Switzerland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">South Arabia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">South Africa</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Tanzania</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Turkey</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Tajikistan</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Thailand</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Uruguay</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Ukraine</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">United Kingdom</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">United States</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Uzbekistan</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Vietnam</div>
                      </div>
                    </div>
                  </Scrollbars>
                </div>
              </div>
            </div>
            <div className="cc-container">
              <div className="cc-map-wraper">
                <iframe
                  src="https://safetag-website-content.s3.eu-west-2.amazonaws.com/coverage-zone-maps/714799.html"
                  title="Global Extended Map"
                ></iframe>
                {/* <img src={Global} alt='World Map' /> */}
              </div>
              <div className="cc-country-wrap">
                <div className="cc-country-title">Global Extended</div>
                <div className="country-list-wrap">
                  <div className="country-list-title">Country List</div>
                  <Scrollbars autoHide style={{ height: "100%" }}>
                  <div className="country-list">
                  <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Argentina</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Austria</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Algeria</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Australia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Azerbaijan</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Burkina Faso</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Basnia and Herzegovina</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Belareus</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Belgium</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Brazil</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Bulgaria</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Canada</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Croatia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Chile</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Colombia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Czech Republic</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Denmark</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Ecuador</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Estonia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Finland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">France</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Germany</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Greece</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Guyane</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Hungary</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Iceland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Ireland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Italy</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Iran</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Iraq</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">India</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Japan</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Latvia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Lithuania</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Kazakhstan</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Moldova</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Mongolia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Montenegro</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Mexico</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Malaysia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Mozambique</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Myanmar</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Netherland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Norway</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">New Zealand</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Nigeria</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Pakistan</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Paraguay</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Peru</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Poland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Portugal</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Phillippines</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Romania</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Russia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Serbia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Slovakia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Slovenia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Spain</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Svalbard and Janmayen</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">South Korea</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Sweden</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Switzerland</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">South Arabia</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">South Africa</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Tanzania</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Turkey</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Tajikistan</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Thailand</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Uruguay</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Ukraine</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">United Kingdom</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">United States</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Uzbekistan</div>
                      </div>
                      <div className="country-list-row">
                        <div className="country-icon">
                          <img src={Flag} alt="Flag" />
                        </div>
                        <div className="country-name">Vietnam</div>
                      </div>
                    </div>
                  </Scrollbars>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coverage;

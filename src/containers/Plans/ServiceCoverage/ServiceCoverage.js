import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Form from "react-bootstrap/Form";
import Flag from "../../../assets/images/flags/Flags.png";
import "./ServiceCoverage.scss";
import { Chart } from "react-google-charts";

const ServiceCoverage = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  let data = [];
  if (value === "1") {
    data = [
      ["Country"],
      ["Austria"],
      ["Belgium"],
      ["Bulgaria"],
      ["Croatia"],
      ["Cyprus"],
      ["Czech Republic"],
      ["Denmark"],
      ["Estonia"],
      ["Finland"],
      ["France"],
      ["Germany"],
      ["Greece"],
      ["Hungary"],
      ["Iceland"],
      ["Ireland"],
      ["Italy"],
      ["Latvia"],
      ["Liechtenstein"],
      ["Lithuania"],
      ["Luxembourg"],
      ["Malta"],
      ["Netherlands"],
      ["Norway"],
      ["Poland"],
      ["Portugal"],
      ["Romania"],
      ["Slovakia"],
      ["Slovenia"],
      ["Spain"],
      ["Svalbard and Jan Mayen"],
      ["Sweden"],
      ["Turkish Republic of Northern Cyprus"],
      ["United Kingdom"],
      ["Vatican City"],
    ];
  }
  if (value === "2") {
    data = [
      ["Country"],
      ["Albania"],
      ["Austria"],
      ["Belarus"],
      ["Belgium"],
      ["Bosnia and Herzegovina"],
      ["Bulgaria"],
      ["Crimea"],
      ["Croatia"],
      ["Cyprus"],
      ["Czech Republic"],
      ["Denmark"],
      ["Estonia"],
      ["Finland"],
      ["France"],
      ["Germany"],
      ["Gibraltar"],
      ["Greece"],
      ["Hungary"],
      ["Iceland"],
      ["Ireland"],
      ["Italy"],
      ["Latvia"],
      ["Liechtenstein"],
      ["Lithuania"],
      ["Luxembourg"],
      ["Malta"],
      ["Mayotte"],
      ["Moldova"],
      ["Monaco"],
      ["Montenegro"],
      ["Netherlands"],
      ["Norway"],
      ["Poland"],
      ["Portugal"],
      ["Macedonia"],
      ["Reunion"],
      ["Romania"],
      ["Russia"],
      ["Serbia"],
      ["Slovakia"],
      ["Slovenia"],
      ["Spain"],
      ["Svalbard and Jan Mayen"],
      ["Sweden"],
      ["Switzerland"],
      ["Turkey"],
      ["Turkish Republic of Northern Cyprus"],
      ["Ukraine"],
      ["United Kingdom"],
      ["Vatican City"],
    ];
  }

  if (value === "3") {
    data = [
      ["Country"],
      ["Albania"],
      ["Algeria"],
      ["Argentina"],
      ["Ashmore and Cartier Islands"],
      ["Australia"],
      ["Australian Indian Ocean Territories"],
      ["Austria"],
      ["Azerbaijan"],
      ["Bahrain"],
      ["Baikonur"],
      ["Bangladesh"],
      ["Belarus"],
      ["Belgium"],
      ["Bosnia and Herzegovina"],
      ["Brazil"],
      ["Brunei"],
      ["Bulgaria"],
      ["Burkina Faso"],
      ["Burundi"],
      ["Canada"],
      ["Chile"],
      ["Christmas Island"],
      ["Cocos (Keeling) Islands"],
      ["Colombia"],
      ["Crimea"],
      ["Croatia"],
      ["Cyprus"],
      ["Czech Republic"],
      ["Denmark"],
      ["Dominican Republic"],
      ["East Timor"],
      ["Ecuador"],
      ["Estonia"],
      ["Faroe Islands"],
      ["Finland"],
      ["France"],
      ["Georgia"],
      ["Germany"],
      ["Gibraltar"],
      ["Greece"],
      ["Guantanamo Bay Naval Base"],
      ["Guatemala"],
      ["Guyana"],
      ["Heard Island and McDonald Islands"],
      ["Honduras"],
      ["Hong Kong"],
      ["Hungary"],
      ["Iceland"],
      ["India"],
      ["Iran"],
      ["Iraq"],
      ["Ireland"],
      ["Israel"],
      ["Italy"],
      ["Japan"],
      ["Kazakhstan"],
      ["Kuwait"],
      ["Kyrgyzstan"],
      ["Latvia"],
      ["Liechtenstein"],
      ["Lithuania"],
      ["Luxembourg"],
      ["Malaysia"],
      ["Malta"],
      ["Mauritius"],
      ["Mayotte"],
      ["Mexico"],
      ["Moldova"],
      ["Monaco"],
      ["Mongolia"],
      ["Montenegro"],
      ["Mozambique"],
      ["Myanmar"],
      ["Netherlands"],
      ["New Zealand"],
      ["Nigeria"],
      ["Northern Mariana Islands"],
      ["Norway"],
      ["Pakistan"],
      ["Palestine"],
      ["Panama"],
      ["Paraguay"],
      ["China"],
      ["Peru"],
      ["Philippines"],
      ["Poland"],
      ["Portugal"],
      ["Puerto Rico"],
      ["Macedonia"],
      ["Reunion"],
      ["Romania"],
      ["Russia"],
      ["Saudi Arabia"],
      ["Serbia"],
      ["Singapore"],
      ["Slovakia"],
      ["Slovenia"],
      ["South Africa"],
      ["South Korea"],
      ["Spain"],
      ["Svalbard and Jan Mayen"],
      ["Sweden"],
      ["Switzerland"],
      ["Taiwan"],
      ["Tajikistan"],
      ["Tanzania"],
      ["Thailand"],
      ["Turkey"],
      ["Turkish Republic of Northern Cyprus"],
      ["Ukraine"],
      ["United Kingdom"],
      ["United States Virgin Islands"],
      ["United States"],
      ["Uruguay"],
      ["Uzbekistan"],
      ["Vatican City"],
      ["Vietnam"],
    ];
  }

  if (value === "4") {
    data = [
      ["Country"],
      ["Afghanistan"],
      ["Albania"],
      ["Algeria"],
      ["Anguilla"],
      ["Antigua and Barbuda"],
      ["Argentina"],
      ["Armenia"],
      ["Aruba"],
      ["Ashmore and Cartier Islands"],
      ["Australia"],
      ["Australian Indian Ocean Territories"],
      ["Austria"],
      ["Azerbaijan"],
      ["Bahrain"],
      ["Baikonur"],
      ["Bangladesh"],
      ["Barbados"],
      ["Belarus"],
      ["Belgium"],
      ["Belize"],
      ["Benin"],
      ["Bhutan"],
      ["Bolivia"],
      ["Bonaire"],
      ["Bosnia and Herzegovina"],
      ["Botswana"],
      ["Brazil"],
      ["British Virgin Islands"],
      ["Brunei"],
      ["Bulgaria"],
      ["Burkina Faso"],
      ["Burundi"],
      ["Cambodia"],
      ["Cameroon"],
      ["Canada"],
      ["Cayman Islands"],
      ["Central African Republic"],
      ["Chile"],
      ["Christmas Island"],
      ["Cocos (Keeling) Islands"],
      ["Colombia"],
      ["Costa Rica"],
      ["Crimea"],
      ["Croatia"],
      ["CuraÃ§ao"],
      ["Cyprus"],
      ["Czech Republic"],
      ["Democratic Republic of the Congo"],
      ["Denmark"],
      ["Dominica"],
      ["Dominican Republic"],
      ["East Timor"],
      ["Ecuador"],
      ["Egypt"],
      ["El Salvador"],
      ["Estonia"],
      ["Eswatini"],
      ["Faroe Islands"],
      ["Fiji"],
      ["Finland"],
      ["France"],
      ["French Antilles"],
      ["French Guiana"],
      ["French Polynesia"],
      ["Gabon"],
      ["Georgia"],
      ["Germany"],
      ["Ghana"],
      ["Gibraltar"],
      ["Greece"],
      ["Greenland"],
      ["Grenada"],
      ["Guadeloupe"],
      ["Guantanamo Bay Naval Base"],
      ["Guatemala"],
      ["Guernsey"],
      ["Guinea"],
      ["Guinea-Bissau"],
      ["Guyana"],
      ["Haiti"],
      ["Heard Island and McDonald Islands"],
      ["Honduras"],
      ["Hong Kong"],
      ["Hungary"],
      ["Iceland"],
      ["India"],
      ["Indonesia"],
      ["Iran"],
      ["Iraq"],
      ["Ireland"],
      ["Isle of Man"],
      ["Israel"],
      ["Italy"],
      ["Ivory Coast"],
      ["Jamaica"],
      ["Japan"],
      ["Jersey"],
      ["Jordan"],
      ["Kazakhstan"],
      ["Kenya"],
      ["Kosovo"],
      ["Kuwait"],
      ["Kyrgyzstan"],
      ["Laos"],
      ["Latvia"],
      ["Lesotho"],
      ["Liechtenstein"],
      ["Lithuania"],
      ["Luxembourg"],
      ["Macau"],
      ["Madagascar"],
      ["Malawi"],
      ["Malaysia"],
      ["Mali"],
      ["Malta"],
      ["Martinique"],
      ["Mauritania"],
      ["Mauritius"],
      ["Mayotte"],
      ["Mexico"],
      ["Moldova"],
      ["Monaco"],
      ["Mongolia"],
      ["Montenegro"],
      ["Montserrat"],
      ["Morocco"],
      ["Mozambique"],
      ["Myanmar"],
      ["Namibia"],
      ["Nauru"],
      ["Nepal"],
      ["Netherlands"],
      ["New Zealand"],
      ["Nicaragua"],
      ["Niger"],
      ["Nigeria"],
      ["Northern Mariana Islands"],
      ["Norway"],
      ["Oman"],
      ["Pakistan"],
      ["Palestine"],
      ["Panama"],
      ["Papua New Guinea"],
      ["Paraguay"],
      ["China"],
      ["Peru"],
      ["Philippines"],
      ["Poland"],
      ["Portugal"],
      ["Puerto Rico"],
      ["Qatar"],
      ["Macedonia"],
      ["Republic of the Congo"],
      ["Reunion"],
      ["Romania"],
      ["Russia"],
      ["Rwanda"],
      ["Saba"],
      ["Saint Kitts and Nevis"],
      ["Saint Lucia"],
      ["Saint Martin"],
      ["Saint Vincent and the Grenadines"],
      ["Saint-BarthÃ©lemy"],
      ["Samoa"],
      ["Saudi Arabia"],
      ["Senegal"],
      ["Serbia"],
      ["Seychelles"],
      ["Sierra Leone"],
      ["Singapore"],
      ["Sint Eustatius"],
      ["Sint Maarten"],
      ["Slovakia"],
      ["Slovenia"],
      ["South Africa"],
      ["South Korea"],
      ["South Sudan"],
      ["Spain"],
      ["Sri Lanka"],
      ["Sudan"],
      ["Suriname"],
      ["Svalbard and Jan Mayen"],
      ["Sweden"],
      ["Switzerland"],
      ["Taiwan"],
      ["Tajikistan"],
      ["Tanzania"],
      ["Thailand"],
      ["The Gambia"],
      ["Tonga"],
      ["Trinidad and Tobago"],
      ["Tunisia"],
      ["Turkey"],
      ["Turkish Republic of Northern Cyprus"],
      ["Turks and Caicos Islands"],
      ["Uganda"],
      ["Ukraine"],
      ["United Kingdom"],
      ["United States Virgin Islands"],
      ["United States"],
      ["Uruguay"],
      ["Uzbekistan"],
      ["Vatican City"],
      ["Venezuela"],
      ["Vietnam"],
      ["Western Sahara"],
      ["Zambia"],
    ];
  }

  const options = {
    region: "150",
    width: "100%",
    defaultColor: "#0068FF",
    datalessRegionColor: "#CECFD0",
  };

  return (
    <>
      <div className="coverage-container-wrap">
        <div className="container">
          <div className="coverage-content-wrapper">
            <div className="coverage-section-title">Coverage</div>
            <div className="cc-container service">
              <div className="cc-map-wraper">
              <div className="coverage_map">
                <Chart
                  chartType="GeoChart"
                  width="100%"
                  height="520px"
                  data={data}
                  options={options}
                />
                </div>
                <div className="coverage_detail">
                    <div className="info">
                       $7.99 <span>/ Month</span>
                    </div>
                    <div className="info">
                       $7.99 <span>/ Month</span>
                    </div>
                    <div className="info">
                       $7.99 <span>/ Month</span>
                    </div>
                </div>
              </div>
              <div className="cc-country-wrap">
                <div className="cc-country-title">Coverage</div>
                <div class="country-list-wrap">
                  <div className="country-list-title">
                    <Form.Select value={value} onChange={handleChange}>
                      <option value="1">Europe Basic</option>
                      <option value="2">Europe Extended</option>
                      <option value="3">Global Basic</option>
                      <option value="4">Global Extended</option>
                    </Form.Select>
                  </div>
                  <Scrollbars autoHide style={{ height: "100%" }}>
                    {value === "1" ? (
                      <div className="country-list">
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img
                              alt="Austria"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/AT.svg"
                            />
                          </div>
                          <div className="country-name">Austria</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Belgium"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/BE.svg"
                            />
                          </div>
                          <div className="country-name">Belgium</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Bulgaria"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/BG.svg"
                            />
                          </div>
                          <div className="country-name">Bulgaria</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Croatia"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/HR.svg"
                            />
                          </div>
                          <div className="country-name">Croatia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Cyprus"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/CY.svg"
                            />
                          </div>
                          <div className="country-name">Cyprus</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Czech Republic"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/CZ.svg"
                            />
                          </div>
                          <div className="country-name">Czech Republic</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Denmark"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/DK.svg"
                            />
                          </div>
                          <div className="country-name">Denmark</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Estonia"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/EE.svg"
                            />
                          </div>
                          <div className="country-name">Estonia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Estonia"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/FI.svg"
                            />
                          </div>
                          <div className="country-name">Finland</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="France"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/FR.svg"
                            />
                          </div>
                          <div className="country-name">France</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Germany"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/DE.svg"
                            />
                          </div>
                          <div className="country-name">Germany</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Greece"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/GR.svg"
                            />
                          </div>
                          <div className="country-name">Greece</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Hungary"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/HU.svg"
                            />
                          </div>
                          <div className="country-name">Hungary</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Iceland"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/IS.svg"
                            />
                          </div>
                          <div className="country-name">Iceland</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Ireland"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/IE.svg"
                            />
                          </div>
                          <div className="country-name">Ireland</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Italy"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/IT.svg"
                            />
                          </div>
                          <div className="country-name">Italy</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Latvia"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/LV.svg"
                            />
                          </div>
                          <div className="country-name">Latvia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Liechtenstein"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/LI.svg"
                            />
                          </div>
                          <div className="country-name">Liechtenstein</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Lithuania"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/LT.svg"
                            />
                          </div>
                          <div className="country-name">Lithuania</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Luxembourg"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/LU.svg"
                            />
                          </div>
                          <div className="country-name">Luxembourg</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Malta"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/MT.svg"
                            />
                          </div>
                          <div className="country-name">Malta</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Netherland"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/NL.svg"
                            />
                          </div>
                          <div className="country-name">Netherland</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Norway"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/NO.svg"
                            />
                          </div>
                          <div className="country-name">Norway</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Poland"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/PL.svg"
                            />
                          </div>
                          <div className="country-name">Poland</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Portugal"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/PT.svg"
                            />
                          </div>
                          <div className="country-name">Portugal</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Romania"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/RO.svg"
                            />
                          </div>
                          <div className="country-name">Romania</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Slovakia"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/SK.svg"
                            />
                          </div>
                          <div className="country-name">Slovakia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Slovenia"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/SI.svg"
                            />
                          </div>
                          <div className="country-name">Slovenia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Spain"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/ES.svg"
                            />
                          </div>
                          <div className="country-name">Spain</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Svalbard and Jan Mayen"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/SJ.svg"
                            />
                          </div>
                          <div className="country-name">
                            Svalbard and Jan Mayen
                          </div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Sweden"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/SE.svg"
                            />
                          </div>
                          <div className="country-name">Sweden</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Turkish Republic of Northern Cyprus"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/TR.svg"
                            />
                          </div>
                          <div className="country-name">
                            Turkish Republic of Northern Cyprus
                          </div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="United Kingdom"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/GB.svg"
                            />
                          </div>
                          <div className="country-name">United Kingdom</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                          <img
                              alt="Vatican City"
                              src="http://purecatamphetamine.github.io/country-flag-icons/1x1/VA.svg"
                            />
                          </div>
                          <div className="country-name">Vatican City</div>
                        </div>
                      </div>
                    ) : value === "2" ? (
                      <div className="country-list">
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Albania</div>
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
                          <div className="country-name">
                            Basnia and Herzegovina
                          </div>
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
                          <div className="country-name">China</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Crimea</div>
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
                          <div className="country-name">Cyprus</div>
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
                          <div className="country-name">Gibraltar</div>
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
                          <div className="country-name">Liechtenstein</div>
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
                          <div className="country-name">Luxembourg</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Malta</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Mayotte</div>
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
                          <div className="country-name">Monaco</div>
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
                          <div className="country-name">Macedonia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Reunion</div>
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
                          <div className="country-name">
                            Svalbard and Jan Mayen
                          </div>
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
                          <div className="country-name">Turkey</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Turkish Republic of Northern Cyprus
                          </div>
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
                          <div className="country-name">Vatican City</div>
                        </div>
                      </div>
                    ) : value === "3" ? (
                      <div className="country-list">
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Albania</div>
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
                          <div className="country-name">Argentina</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Ashmore and Cartier Islands
                          </div>
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
                          <div className="country-name">
                            Australian Indian Ocean Territories
                          </div>
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
                          <div className="country-name">Azerbaijan</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Bahrain</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Baikonur</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Bangladesh</div>
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
                          <div className="country-name">
                            Bosnia and Herzegovina
                          </div>
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
                          <div className="country-name">Brunei</div>
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
                          <div className="country-name">Burkina Faso</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Burundi</div>
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
                          <div className="country-name">Chile</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">China</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Christmas Island</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Cocos (Keeling) Islands
                          </div>
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
                          <div className="country-name">Crimea</div>
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
                          <div className="country-name">Cyprus</div>
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
                          <div className="country-name">Dominican Republic</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">East Timor</div>
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
                          <div className="country-name">Faroe Islands</div>
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
                          <div className="country-name">Georgia</div>
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
                          <div className="country-name">Gibraltar</div>
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
                          <div className="country-name">
                            Guantanamo Bay Naval Base
                          </div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Guatemala</div>
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
                          <div className="country-name">
                            Heard Island and McDonald Islands
                          </div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Honduras</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Hong Kong</div>
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
                          <div className="country-name">India</div>
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
                          <div className="country-name">Ireland</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Israel</div>
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
                          <div className="country-name">Japan</div>
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
                          <div className="country-name">Kuwait</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Kyrgyzstan</div>
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
                          <div className="country-name">Liechtenstein</div>
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
                          <div className="country-name">Luxembourg</div>
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
                          <div className="country-name">Malta</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Mauritius</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Mayotte</div>
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
                          <div className="country-name">Moldova</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Monaco</div>
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
                          <div className="country-name">Macedonia</div>
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
                          <div className="country-name">
                            Northern Mariana Islands
                          </div>
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
                          <div className="country-name">Palestine</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Panama</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Puerto Rico</div>
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
                          <div className="country-name">Reunion</div>
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
                          <div className="country-name">
                            Svalbard and Janmayen
                          </div>
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
                          <div className="country-name">Singapore</div>
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
                          <div className="country-name">Taiwan</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Turkish Republic of Northern Cyprus
                          </div>
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
                          <div className="country-name">
                            United States Virgin Islands
                          </div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Vatican City</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Vietnam</div>
                        </div>
                      </div>
                    ) : (
                      <div className="country-list">
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Afghanistan</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Albania</div>
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
                          <div className="country-name">Anguilla</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Antigua and Barbuda
                          </div>
                        </div>
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
                          <div className="country-name">Armenia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Aruba</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Ashmore and Cartier Islands
                          </div>
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
                          <div className="country-name">
                            Australian Indian Ocean Territories
                          </div>
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
                          <div className="country-name">Azerbaijan</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Bahrain</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Baikonur</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Bangladesh</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Barbados</div>
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
                          <div className="country-name">
                            Bosnia and Herzegovina
                          </div>
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
                          <div className="country-name">Brunei</div>
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
                          <div className="country-name">Burkina Faso</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Burundi</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Belize</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Benin</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Bhutan</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Bolivia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Bonaire</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Botswana</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            British Virgin Islands
                          </div>
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
                          <div className="country-name">Chile</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Christmas Island</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Cocos (Keeling) Islands
                          </div>
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
                          <div className="country-name">Crimea</div>
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
                          <div className="country-name">Cyprus</div>
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
                          <div className="country-name">Cambodia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Cameroon</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Cayman Islands</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Central African Republic
                          </div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Costa Rica</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">CuraÃ§ao</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">China</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Democratic Republic of the Congo
                          </div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Dominica</div>
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
                          <div className="country-name">Dominican Republic</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">East Timor</div>
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
                          <div className="country-name">Egypt</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">El Salvador</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Eswatini</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Faroe Islands</div>
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
                          <div className="country-name">Fiji</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">French Antilles</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">French Guiana</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">French Polynesia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Georgia</div>
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
                          <div className="country-name">Gibraltar</div>
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
                          <div className="country-name">
                            Guantanamo Bay Naval Base
                          </div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Guatemala</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Guyana</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Gabon</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Ghana</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Greenland</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Grenada</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Guadeloupe</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Guernsey</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Guinea</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Guinea-Bissau</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Haiti</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Heard Island and McDonald Islands
                          </div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Honduras</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Hong Kong</div>
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
                          <div className="country-name">India</div>
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
                          <div className="country-name">Ireland</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Israel</div>
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
                          <div className="country-name">Indonesia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Isle of Man</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Ivory Coast</div>
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
                          <div className="country-name">Jamaica</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Jersey</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Jordan</div>
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
                          <div className="country-name">Kuwait</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Kyrgyzstan</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Kenya</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Kosovo</div>
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
                          <div className="country-name">Liechtenstein</div>
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
                          <div className="country-name">Luxembourg</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Laos</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Lesotho</div>
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
                          <div className="country-name">Malta</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Mauritius</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Mayotte</div>
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
                          <div className="country-name">Moldova</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Monaco</div>
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
                          <div className="country-name">Macedonia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Macau</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Madagascar</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Malawi</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Mali</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Martinique</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Mauritania</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Montserrat</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Morocco</div>
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
                          <div className="country-name">
                            Northern Mariana Islands
                          </div>
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
                          <div className="country-name">Namibia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Nauru</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Nepal</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Nicaragua</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Niger</div>
                        </div>

                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Oman</div>
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
                          <div className="country-name">Palestine</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Panama</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Puerto Rico</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Papua New Guinea</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Qatar</div>
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
                          <div className="country-name">Reunion</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Republic of the Congo
                          </div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Rwanda</div>
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
                          <div className="country-name">
                            Svalbard and Janmayen
                          </div>
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
                          <div className="country-name">Singapore</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Saba</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Saint Kitts and Nevis
                          </div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Saint Lucia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Saint Martin</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Saint Vincent and the Grenadines
                          </div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Saint-BarthÃ©lemy</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Samoa</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Senegal</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Seychelles</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Sierra Leone</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Sint Eustatius</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Sint Maarten</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">South Sudan</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Sri Lanka</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Sudan</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Suriname</div>
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
                          <div className="country-name">Taiwan</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Turkish Republic of Northern Cyprus
                          </div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">The Gambia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Tonga</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Trinidad and Tobago
                          </div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Tunisia</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">
                            Turks and Caicos Islands
                          </div>
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
                          <div className="country-name">
                            United States Virgin Islands
                          </div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Uganda</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Vatican City</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Vietnam</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Venezuela</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Western Sahara</div>
                        </div>
                        <div className="country-list-row">
                          <div className="country-icon">
                            <img src={Flag} alt="Flag" />
                          </div>
                          <div className="country-name">Zambia</div>
                        </div>
                      </div>
                    )}
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

export default ServiceCoverage;

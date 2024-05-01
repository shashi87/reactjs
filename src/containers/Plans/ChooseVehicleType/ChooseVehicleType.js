import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ChooseVehicleType.scss";
import { TickMark } from "../../../assets/Icons";
import { useTranslation } from "react-i18next";

const ChooseVehicleType = (props) => {

  const newVal = props.values.newVAl;
  const oldVal = props.values.oldVal;

  let changeRate;
  let currencySign;

  if (oldVal === "GBP" && (newVal === "" || newVal === undefined)) {
    changeRate = 1;
    currencySign = "£";
  }


  if (oldVal === "GBP" && newVal === "USD") {
    changeRate = 1.25;
    currencySign = "$";
  }
  else if (oldVal === "GBP" && newVal === "EUR") {
    changeRate = 1.17;
    currencySign = "€";
  } else if (oldVal === "USD" && newVal === "GBP") {
    changeRate = 0.8;
    currencySign = "£";
  } else if (oldVal === "USD" && newVal === "EUR") {
    changeRate = 0.93;
    currencySign = "€";
  } else if (oldVal === "EUR" && newVal === "GBP") {
    changeRate = 0.86;
    currencySign = "£";
  } else if (oldVal === "EUR" && newVal === "USD") {
    changeRate = 1.07;
    currencySign = "$";
  }

  const { t } = useTranslation();
  const vehicleType = t("vehicleType", { returnObjects: true });
  const [isChecked, setIsChecked] = useState("product1");

  const handleSelectProduct = (productid) => {
    setIsChecked(productid);
  };
  const hostname = window.location.hostname;
  return (
    <>
      {hostname === "localhost" ? (
        <div className="choose-our-product-container bg-transparent">
          <div className="container">
            <div className="choose-our-product-wrap">
              {/* <div className='choose-vehicle'>
                <Form.Label>{vehicleType.chooseVehicle}</Form.Label>
                <Form.Select >
                  <option>{vehicleType.choose}</option>
                  <option value="1">{vehicleType.one}</option>
                  <option value="2">{vehicleType.two}</option>
                  <option value="3">{vehicleType.three}</option>
                </Form.Select>
              </div> */}
              <div className="choose-product-wrap">
                <div className="choose-product-title">
                  {vehicleType.chooseProduct}
                </div>
                <div className="toggle-btn-wrapper for_shop_plan bg-transparent">
                  <div className="switches-container switchMoney">
                    <input
                      type="radio"
                      id="switchMonthly"
                      name="switchPlan"
                      value="Monthly"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      id="switchQuarterly"
                      name="switchPlan"
                      value="Quarterly"
                    />
                    <input
                      type="radio"
                      id="switchAnnual"
                      name="switchPlan"
                      value="Annual"
                    />
                    <label htmlFor="switchMonthly">Monthly</label>
                    <label htmlFor="switchQuarterly">Quarterly</label>
                    <label htmlFor="switchAnnual">Annual</label>
                    <div className="switch-wrapper">
                      <div className="switch">
                        <div>Monthly</div>
                        <div>Quarterly</div>
                        <div>Annual</div>
                      </div>
                    </div>
                  </div>
                  <span></span>
                  <div className="switches-container switchMoney">
                    <input
                      type="radio"
                      id="switchPound"
                      name="switchMoney"
                      value="Pound"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      id="switchDollar"
                      name="switchMoney"
                      value="Dollar"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      id="switchEuro"
                      name="switchMoney"
                      value="Euro"
                    />
                    <label htmlFor="switchPound"> £ Pound</label>
                    <label htmlFor="switchDollar">$ Dollar</label>
                    <label htmlFor="switchEuro">€ Euro</label>
                    <div className="switch-wrapper">
                      <div className="switch">
                        <div>£ Pound</div>
                        <div>$ Dollar</div>
                        <div>€ Euro</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-slider">
                  <Swiper
                    spaceBetween={24}
                    slidesPerView={5}
                    breakpoints={{
                      300: {
                        slidesPerView: 1.5,
                      },
                      768: {
                        slidesPerView: 3,
                      },

                      1199: {
                        slidesPerView: 5,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div
                        className={
                          isChecked === "product1"
                            ? "active product-box"
                            : "product-box"
                        }
                      >
                        <div className="choose-product-top">
                          <div className="product-tag">TT010</div>
                          <div className="product-select-wrap">
                            <input
                              id="product1"
                              type="checkbox"
                              value="product1"
                              checked={isChecked === "product1"}
                              onChange={() => handleSelectProduct("product1")}
                            />
                            <label
                              htmlFor="product1"
                              className="custom-checkbox"
                            >
                              <TickMark />
                            </label>
                          </div>
                        </div>
                        <div className="choose-product-description">
                          {vehicleType.text1}
                        </div>
                        <div className="choose-product-footer">
                          <div className="product-price">
                            {currencySign}
                            {newVal === "" || newVal === undefined
                              ? 1000
                              : 1000 * changeRate}
                          </div>
                          <div className="learn-more">
                            {vehicleType.learnMore}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          isChecked === "product2"
                            ? "active product-box"
                            : "product-box"
                        }
                      >
                        <div className="choose-product-top">
                          <div className="product-tag">TT010</div>
                          <div className="product-select-wrap">
                            <input
                              id="product2"
                              type="checkbox"
                              value="product2"
                              checked={isChecked === "product2"}
                              onChange={() => handleSelectProduct("product2")}
                            />
                            <label
                              htmlFor="product2"
                              className="custom-checkbox"
                            >
                              <TickMark />
                            </label>
                          </div>
                        </div>
                        <div className="choose-product-description">
                          {vehicleType.text2}
                        </div>
                        <div className="choose-product-footer">
                          <div className="product-price">
                            {currencySign}
                            {newVal === "" || newVal === undefined
                              ? 1000
                              : 1000 * changeRate}
                          </div>
                          <div className="learn-more">
                            {vehicleType.learnMore}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          isChecked === "product3"
                            ? "active product-box"
                            : "product-box"
                        }
                      >
                        <div className="choose-product-top">
                          <div className="choose-product-top">
                            <div className="product-tag">TT010</div>
                            <div className="product-select-wrap">
                              <input
                                id="product3"
                                type="checkbox"
                                value="product3"
                                checked={isChecked === "product3"}
                                onChange={() => handleSelectProduct("product3")}
                              />
                              <label
                                htmlFor="product3"
                                className="custom-checkbox"
                              >
                                <TickMark />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="choose-product-description">
                          {vehicleType.text3}
                        </div>
                        <div className="choose-product-footer">
                          <div className="product-price">
                            {currencySign}
                            {newVal === "" || newVal === undefined
                              ? 1000
                              : 1000 * changeRate}
                          </div>
                          <div className="learn-more">
                            {vehicleType.learnMore}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          isChecked === "product4"
                            ? "active product-box"
                            : "product-box"
                        }
                      >
                        <div className="choose-product-top">
                          <div className="choose-product-top">
                            <div className="product-tag">TT010</div>
                            <div className="product-select-wrap">
                              <input
                                id="product4"
                                type="checkbox"
                                value="product4"
                                checked={isChecked === "product4"}
                                onChange={() => handleSelectProduct("product4")}
                              />
                              <label
                                htmlFor="product4"
                                className="custom-checkbox"
                              >
                                <TickMark />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="choose-product-description">
                          {vehicleType.text4}
                        </div>
                        <div className="choose-product-footer">
                          <div className="product-price">
                            {currencySign}
                            {newVal === "" || newVal === undefined
                              ? 1000
                              : 1000 * changeRate}
                          </div>
                          <div className="learn-more">
                            {vehicleType.learnMore}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          isChecked === "product5"
                            ? "active product-box"
                            : "product-box"
                        }
                      >
                        <div className="choose-product-top">
                          <div className="choose-product-top">
                            <div className="product-tag">TT010</div>
                            <div className="product-select-wrap">
                              <input
                                id="product5"
                                type="checkbox"
                                value="product5"
                                checked={isChecked === "product5"}
                                onChange={() => handleSelectProduct("product5")}
                              />
                              <label
                                htmlFor="product5"
                                className="custom-checkbox"
                              >
                                <TickMark />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="choose-product-description">
                          {vehicleType.text5}
                        </div>
                        <div className="choose-product-footer">
                          <div className="product-price">
                            {currencySign}
                            {newVal === "" || newVal === undefined
                              ? 1000
                              : 1000 * changeRate}
                          </div>
                          <div className="learn-more">
                            {vehicleType.learnMore}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            {/* <div className="hr-line"></div> */}
          </div>
        </div>
      ) : (
        <div className="choose-our-product-container ">
          <div className="container">
            <div className="choose-our-product-wrap">
              {/* <div className='choose-vehicle'>
            <Form.Label>{vehicleType.chooseVehicle}</Form.Label>
            <Form.Select >
              <option>{vehicleType.choose}</option>
              <option value="1">{vehicleType.one}</option>
              <option value="2">{vehicleType.two}</option>
              <option value="3">{vehicleType.three}</option>
            </Form.Select>
          </div> */}
              <div className="choose-product-wrap">
                <div className="choose-product-title">
                  {vehicleType.chooseProduct}
                </div>
                <div className="toggle-btn-wrapper for_shop_plan">
                  <div className="switches-container switchMoney">
                    <input
                      type="radio"
                      id="switchMonthly"
                      name="switchPlan"
                      value="Monthly"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      id="switchQuarterly"
                      name="switchPlan"
                      value="Quarterly"
                    />
                    <input
                      type="radio"
                      id="switchAnnual"
                      name="switchPlan"
                      value="Annual"
                    />
                    <label htmlFor="switchMonthly">Monthly</label>
                    <label htmlFor="switchQuarterly">Quarterly</label>
                    <label htmlFor="switchAnnual">Annual</label>
                    <div className="switch-wrapper">
                      <div className="switch">
                        <div>Monthly</div>
                        <div>Quarterly</div>
                        <div>Annual</div>
                      </div>
                    </div>
                  </div>
                  <span></span>
                  <div className="switches-container switchMoney">
                    <input
                      type="radio"
                      id="switchPound"
                      name="switchMoney"
                      value="Pound"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      id="switchDollar"
                      name="switchMoney"
                      value="Dollar"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      id="switchEuro"
                      name="switchMoney"
                      value="Euro"
                    />
                    <label htmlFor="switchPound"> £ Pound</label>
                    <label htmlFor="switchDollar">$ Dollar</label>
                    <label htmlFor="switchEuro">€ Euro</label>
                    <div className="switch-wrapper">
                      <div className="switch">
                        <div>£ Pound</div>
                        <div>$ Dollar</div>
                        <div>€ Euro</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-slider">
                  <Swiper
                    spaceBetween={24}
                    slidesPerView={5}
                    breakpoints={{
                      300: {
                        slidesPerView: 1.5,
                      },
                      768: {
                        slidesPerView: 3,
                      },

                      1199: {
                        slidesPerView: 5,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div
                        className={
                          isChecked === "product1"
                            ? "active product-box"
                            : "product-box"
                        }
                      >
                        <div className="choose-product-top">
                          <div className="product-tag">TT010</div>
                          <div className="product-select-wrap">
                            <input
                              id="product1"
                              type="checkbox"
                              value="product1"
                              checked={isChecked === "product1"}
                              onChange={() => handleSelectProduct("product1")}
                            />
                            <label
                              htmlFor="product1"
                              className="custom-checkbox"
                            >
                              <TickMark />
                            </label>
                          </div>
                        </div>
                        <div className="choose-product-description">
                          {vehicleType.text1}
                        </div>
                        <div className="choose-product-footer">
                          <div className="product-price">
                            {currencySign}
                            {newVal === "" || newVal === undefined
                              ? 1000
                              : 1000 * changeRate}
                          </div>
                          <div className="learn-more">
                            {vehicleType.learnMore}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          isChecked === "product2"
                            ? "active product-box"
                            : "product-box"
                        }
                      >
                        <div className="choose-product-top">
                          <div className="product-tag">TT010</div>
                          <div className="product-select-wrap">
                            <input
                              id="product2"
                              type="checkbox"
                              value="product2"
                              checked={isChecked === "product2"}
                              onChange={() => handleSelectProduct("product2")}
                            />
                            <label
                              htmlFor="product2"
                              className="custom-checkbox"
                            >
                              <TickMark />
                            </label>
                          </div>
                        </div>
                        <div className="choose-product-description">
                          {vehicleType.text2}
                        </div>
                        <div className="choose-product-footer">
                          <div className="product-price">
                            {currencySign}
                            {newVal === "" || newVal === undefined
                              ? 1000
                              : 1000 * changeRate}
                          </div>
                          <div className="learn-more">
                            {vehicleType.learnMore}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          isChecked === "product3"
                            ? "active product-box"
                            : "product-box"
                        }
                      >
                        <div className="choose-product-top">
                          <div className="choose-product-top">
                            <div className="product-tag">TT010</div>
                            <div className="product-select-wrap">
                              <input
                                id="product3"
                                type="checkbox"
                                value="product3"
                                checked={isChecked === "product3"}
                                onChange={() => handleSelectProduct("product3")}
                              />
                              <label
                                htmlFor="product3"
                                className="custom-checkbox"
                              >
                                <TickMark />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="choose-product-description">
                          {vehicleType.text3}
                        </div>
                        <div className="choose-product-footer">
                          <div className="product-price">
                            {currencySign}
                            {newVal === "" || newVal === undefined
                              ? 1000
                              : 1000 * changeRate}
                          </div>
                          <div className="learn-more">
                            {vehicleType.learnMore}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          isChecked === "product4"
                            ? "active product-box"
                            : "product-box"
                        }
                      >
                        <div className="choose-product-top">
                          <div className="choose-product-top">
                            <div className="product-tag">TT010</div>
                            <div className="product-select-wrap">
                              <input
                                id="product4"
                                type="checkbox"
                                value="product4"
                                checked={isChecked === "product4"}
                                onChange={() => handleSelectProduct("product4")}
                              />
                              <label
                                htmlFor="product4"
                                className="custom-checkbox"
                              >
                                <TickMark />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="choose-product-description">
                          {vehicleType.text4}
                        </div>
                        <div className="choose-product-footer">
                          <div className="product-price">
                            {currencySign}
                            {newVal === "" || newVal === undefined
                              ? 1000
                              : 1000 * changeRate}
                          </div>
                          <div className="learn-more">
                            {vehicleType.learnMore}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className={
                          isChecked === "product5"
                            ? "active product-box"
                            : "product-box"
                        }
                      >
                        <div className="choose-product-top">
                          <div className="choose-product-top">
                            <div className="product-tag">TT010</div>
                            <div className="product-select-wrap">
                              <input
                                id="product5"
                                type="checkbox"
                                value="product5"
                                checked={isChecked === "product5"}
                                onChange={() => handleSelectProduct("product5")}
                              />
                              <label
                                htmlFor="product5"
                                className="custom-checkbox"
                              >
                                <TickMark />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="choose-product-description">
                          {vehicleType.text5}
                        </div>
                        <div className="choose-product-footer">
                          <div className="product-price">
                            {currencySign}
                            {newVal === "" || newVal === undefined
                              ? 1000
                              : 1000 * changeRate}
                          </div>
                          <div className="learn-more">
                            {vehicleType.learnMore}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            {/* <div className="hr-line"></div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default ChooseVehicleType;

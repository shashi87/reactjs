import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ChooseVehicleType.scss";
import { useNavigate } from "react-router-dom";
import { TickMark } from "../../../assets/Icons";
import { useTranslation } from "react-i18next";
const ChooseVehicleType = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const order = t("order", { returnObjects: true });
  const plans = t("plansBanner", { returnObjects: true });
  const currency = t("currency", { returnObjects: true });
  const [isChecked, setIsChecked] = useState("product1");

  const handleSelectProduct = (productid) => {
    setIsChecked(productid);
  };
  return (
    <>
      <div className="choose-vehicle-container">
        <div className="container">
          <div className="choose-vehicle-wrap">
            <div className="choose-vehicle">
              <Form.Label>{order.text1}</Form.Label>
              <Form.Select>
                <option>Choose</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>

            <div className="choose-product-wrap">
              <div className="choose-product-title">{order.text2}</div>
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
                  <label htmlFor="switchMonthly">{plans.monthly}</label>
                  <label htmlFor="switchQuarterly">{plans.quarterly}</label>
                  <label htmlFor="switchAnnual">{plans.annual}</label>
                  <div className="switch-wrapper">
                    <div className="switch">
                      <div>{plans.monthly}</div>
                      <div>{plans.quarterly}</div>
                      <div>{plans.annual}</div>
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
                  <label htmlFor="switchPound"> £ {currency.pound}</label>
                  <label htmlFor="switchDollar">$ {currency.dollar}</label>
                  <label htmlFor="switchEuro">€ {currency.euro}</label>
                  <div className="switch-wrapper">
                    <div className="switch">
                      <div>£ {currency.pound}</div>
                      <div>$ {currency.dollar}</div>
                      <div>€ {currency.euro}</div>
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
                        <div className="product-tag">NTSL2</div>
                        <div className="product-select-wrap">
                          <input
                            id="product1"
                            type="checkbox"
                            value="product1"
                            checked={isChecked === "product1"}
                            onChange={() => handleSelectProduct("product1")}
                          />
                          <label htmlFor="product1" className="custom-checkbox">
                            <TickMark />
                          </label>
                        </div>
                      </div>
                      <div className="choose-product-description">
                        {order.text3}
                      </div>
                      <div className="choose-product-footer">
                        <div className="product-price">$1,000</div>
                        <div className="learn-more">
                          <span
                            onClick={() => navigate("/productdetail/NTSL2")}
                          >
                            {order.learnMore}
                          </span>
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
                        <div className="product-tag">NTSC2</div>
                        <div className="product-select-wrap">
                          <input
                            id="product2"
                            type="checkbox"
                            value="product2"
                            checked={isChecked === "product2"}
                            onChange={() => handleSelectProduct("product2")}
                          />
                          <label htmlFor="product2" className="custom-checkbox">
                            <TickMark />
                          </label>
                        </div>
                      </div>
                      <div className="choose-product-description">
                        {order.text4}
                      </div>
                      <div className="choose-product-footer">
                        <div className="product-price">$1,000</div>
                        <div className="learn-more">
                          <span
                            onClick={() => navigate("/productdetail/NTSC2")}
                          >
                            {order.learnMore}
                          </span>
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
                          <div className="product-tag">NTSCM3</div>
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
                        {order.text5}
                      </div>
                      <div className="choose-product-footer">
                        <div className="product-price">$1,000</div>
                        <div className="learn-more">
                          <span
                            onClick={() => navigate("/productdetail/NTSCM3")}
                          >
                            {order.learnMore}
                          </span>
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
                          <div className="product-tag">NTDS2</div>
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
                        {order.text6}
                      </div>
                      <div className="choose-product-footer">
                        <div className="product-price">$1,000</div>
                        <div className="learn-more">
                          <span
                            onClick={() => navigate("/productdetail/NTDS2")}
                          >
                            {order.learnMore}
                          </span>
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
                          <div className="product-tag">NTSR3</div>
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
                        {order.text7}
                      </div>
                      <div className="choose-product-footer">
                        <div className="product-price">$1,000</div>
                        <div className="learn-more">
                          <span
                            onClick={() => navigate("/productdetail/NTSR3")}
                          >
                            {order.learnMore}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseVehicleType;

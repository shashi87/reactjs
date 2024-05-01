import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./PlansDetail.scss";
import { ArrowRight, TickMark } from "../../../assets/Icons";
//import { useTranslation } from "react-i18next";
const PlansDetail = (props) => {
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
  } else if (oldVal === "GBP" && newVal === "EUR") {
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

  const navigate = useNavigate();
  const hostname = window.location.hostname;
  //const { t } = useTranslation();
  //const plansBanner = t("plansBanner", { returnObjects: true });
  return (
    <>
      
      {hostname === "localhost" ? (
        <div className="plans-details-wrapper remove-after">
          <div className="container">
            <div className="plans-detail-box-wrapper">
              <div className="plans-detail-box">
                <div className="plans-detail-content">
                  <div className="plans-title">Free</div>
                  <div className="plan-price-wrap">
                    <div className="plan-price">
                      {currencySign}{" "}
                      {newVal === "" || newVal === undefined
                        ? 0
                        : 0 * changeRate}
                    </div>
                    <div className="plan-duration">/month</div>
                  </div>
                  <div className="feature-list-wrap">
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                  </div>
                </div>
                <div className="plans-btn-wrap">
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up <ArrowRight />
                  </Button>
                </div>
              </div>
              <div className="plans-detail-box best-deal">
                <div className="best-deal-wrap">Best Deal</div>
                <div className="plans-detail-content">
                  <div className="plans-title">Basic</div>
                  <div className="plan-price-wrap">
                    <div className="plan-price">
                      {currencySign}{" "}
                      {newVal === "" || newVal === undefined
                        ? 19
                        : 19 * changeRate}
                    </div>
                    <div className="plan-duration">/month</div>
                  </div>
                  <div className="feature-list-wrap">
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                  </div>
                </div>
                <div className="plans-btn-wrap">
                  <Button
                    variant="primary"
                    onClick={() => navigate("/payment")}
                  >
                    Subscribe
                    <ArrowRight />
                  </Button>
                </div>
              </div>
              <div className="plans-detail-box">
                <div className="plans-detail-content">
                  <div className="plans-title">Enterprise</div>
                  <div className="plan-price-wrap">
                    <div className="plan-price">
                      {currencySign}{" "}
                      {newVal === "" || newVal === undefined
                        ? 39
                        : 39 * changeRate}
                    </div>
                    <div className="plan-duration">/month</div>
                  </div>
                  <div className="feature-list-wrap">
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                  </div>
                </div>
                <div className="plans-btn-wrap">
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/payment")}
                  >
                    Subscribe
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="plans-details-wrapper">
          <div className="container">
            <div className="plans-detail-box-wrapper">
              <div className="plans-detail-box">
                <div className="plans-detail-content">
                  <div className="plans-title">Free</div>
                  <div className="plan-price-wrap">
                    <div className="plan-price">
                      {currencySign}{" "}
                      {newVal === "" || newVal === undefined
                        ? 0
                        : 0 * changeRate}
                    </div>
                    <div className="plan-duration">/month</div>
                  </div>
                  <div className="feature-list-wrap">
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                  </div>
                </div>
                <div className="plans-btn-wrap">
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up <ArrowRight />
                  </Button>
                </div>
              </div>
              <div className="plans-detail-box best-deal">
                <div className="best-deal-wrap">Best Deal</div>
                <div className="plans-detail-content">
                  <div className="plans-title">Basic</div>
                  <div className="plan-price-wrap">
                    <div className="plan-price">
                      {currencySign}{" "}
                      {newVal === "" || newVal === undefined
                        ? 19
                        : 19 * changeRate}
                    </div>
                    <div className="plan-duration">/month</div>
                  </div>
                  <div className="feature-list-wrap">
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                  </div>
                </div>
                <div className="plans-btn-wrap">
                  <Button
                    variant="primary"
                    onClick={() => navigate("/payment")}
                  >
                    Subscribe
                    <ArrowRight />
                  </Button>
                </div>
              </div>
              <div className="plans-detail-box">
                <div className="plans-detail-content">
                  <div className="plans-title">Enterprise</div>
                  <div className="plan-price-wrap">
                    <div className="plan-price">
                      {currencySign}
                      {newVal === "" || newVal === undefined
                        ? 39
                        : 39 * changeRate}
                    </div>
                    <div className="plan-duration">/month</div>
                  </div>
                  <div className="feature-list-wrap">
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                    <div className="fl-row">
                      <div className="fl-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="fl-text-wrap">Features</div>
                    </div>
                  </div>
                </div>
                <div className="plans-btn-wrap">
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/payment")}
                  >
                    Subscribe
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlansDetail;

import React from "react";
import "./OurProduct.scss";
import { TickMark } from "../../../assets/Icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const OurProduct = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const product = t("productList", { returnObjects: true });
  return (
    <>
      <div className="product-list-wrapper">
        <div className="container">
          <div className="product-title-wrap">{product.ourProducts}</div>
          <div className="product-box-wrapper">
            <div className="product-box">
              <div className="product-tag">
                <span>{product.s7.s7}</span>
              </div>
              <div className="product-detail-wrap">
                <div className="product-detail-title-wrap">
                  <div className="product-detail-title">
                    {product.s7.heading}
                  </div>
                  <div className="product-detail-subtitle">
                    {product.s7.description}
                  </div>
                </div>
                <div className="product-list-wrap">
                  <div className="product-list-row">
                    <div className="product-icon-wrap">
                      <TickMark />
                    </div>
                    <div className="product-list">{product.s7.text1}</div>
                  </div>
                  <div className="product-list-row">
                    <div className="product-icon-wrap">
                      <TickMark />
                    </div>
                    <div className="product-list">{product.s7.text2}</div>
                  </div>
                </div>
              </div>
              <div className="learn-more">
                <span onClick={() => navigate("/productdetail/TT920")}>
                  {product.learnMore}
                </span>
              </div>
            </div>
            <div className="product-box">
              <div className="product-tag">
                <span>{product.s5.s5}</span>
              </div>

              <div className="product-detail-wrap">
                <div className="product-detail-title-wrap">
                  <div className="product-detail-title">
                    {product.s5.heading}
                  </div>
                  <div className="product-detail-subtitle">
                    {product.s5.description}
                  </div>
                </div>
                <div className="product-list-wrap">
                  <div className="product-list-row">
                    <div className="product-icon-wrap">
                      <TickMark />
                    </div>
                    <div className="product-list">{product.s5.text1}</div>
                  </div>
                  <div className="product-list-row">
                    <div className="product-icon-wrap">
                      <TickMark />
                    </div>
                    <div className="product-list">{product.s5.text2}</div>
                  </div>
                </div>
              </div>
              <div className="learn-more">
                <span onClick={() => navigate("/productdetail/TT100")}>
                  {product.learnMore}
                </span>
              </div>
            </div>
            <div className="product-box">
              <div className="product-tag">
                <span>{product.s5s.s5s}</span>
              </div>

              <div className="product-detail-wrap">
                <div className="product-detail-title-wrap">
                  <div className="product-detail-title">
                    {product.s5s.heading}
                  </div>
                  <div className="product-detail-subtitle">
                    {product.s5s.description}
                  </div>
                </div>
                <div className="product-list-wrap">
                  <div className="product-list-row">
                    <div className="product-icon-wrap">
                      <TickMark />
                    </div>
                    <div className="product-list">{product.s5s.text1}</div>
                  </div>
                  <div className="product-list-row">
                    <div className="product-icon-wrap">
                      <TickMark />
                    </div>
                    <div className="product-list">{product.s5s.text2}</div>
                  </div>
                </div>
              </div>
              <div className="learn-more">
                <span onClick={() => navigate("/productdetail/TT010")}>
                  {product.learnMore}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProduct;

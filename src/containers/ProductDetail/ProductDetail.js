import React, { useEffect } from "react";
import NTSL2 from "../../assets/images/products/NTSL2/Main.png";
import NTSL2K1 from "../../assets/images/products/NTSL2/Key-feature-1.png";
import NTSL2K2 from "../../assets/images/products/NTSL2/Key-feature-2.png";

import NTDS2 from "../../assets/images/products/NTDS2/Main.png";
import NTDS2K1 from "../../assets/images/products/NTDS2/Key-feature-1.png";
import NTDS2K2 from "../../assets/images/products/NTDS2/Key-feature-2.png";

import NTSC2 from "../../assets/images/products/NTSC2/Main.png";
import NTSC2K1 from "../../assets/images/products/NTSC2/Key-feature-1.png";
import NTSC2K2 from "../../assets/images/products/NTSC2/Key-feature-2.png";

import NTSCM3 from "../../assets/images/products/NTSCM3/Main.png";
import NTSCM3K1 from "../../assets/images/products/NTSCM3/Key-feature-1.png";
import NTSCM3K2 from "../../assets/images/products/NTSCM3/Key-feature-2.png";

import NTSR3 from "../../assets/images/products/NTSR3/Main.png";
import NTSR3K1 from "../../assets/images/products/NTSR3/Key-feature-1.png";
import NTSR3K2 from "../../assets/images/products/NTSR3/Key-feature-2.png";

import { BackArrowIcon, CarIcon, NavigationIcon } from "../../assets/Icons";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ProductDetail = () => {
  const navigate = useNavigate();
  const { pid } = useParams();
  const { t } = useTranslation();
  const product = t(pid, { returnObjects: true });
  useEffect(() => {
    document.body.classList.add("remove-body-padding");
    document.getElementById("header").classList.add("header-bg-blue");
    return () => {
      document.body.classList.remove("remove-body-padding");
      document.getElementById("header").classList.remove("header-bg-blue");
    };
  }, []);
  return (
    <>
      <div className="product-detail-top-wrapper">
        <div className="container">
          <div className="product-detail-top">
            <div className="product-detail-left">
              <div className="btn-wrap back-btn">
                <Button variant="light" onClick={() => navigate(-1)}>
                  <BackArrowIcon /> Back
                </Button>
              </div>
              <div className="product-detail">
                <div className="productid">{product.productId}</div>
                <div className="product-name">{product.productName}</div>
                <div className="product-description">
                  {product.description} <br />
                  {product.description2}
                </div>
              </div>
              <div>
                <Button variant="primary">{product.orderNow}</Button>
              </div>
            </div>
            <div className="product-img-wrap">
              {product.productId === "NTSL2" ? (
                <img src={NTSL2} alt="HardWired Tracker" />
              ) : product.productId === "NTDS2" ? (
                <img src={NTDS2} alt="HardWired Tracker" />
              ) : product.productId === "NTSC2" ? (
                <img src={NTSC2} alt="HardWired Tracker" />
              ) : product.productId === "NTSCM3" ? (
                <img src={NTSCM3} alt="HardWired Tracker" />
              ) : (
                <img src={NTSR3} alt="HardWired Tracker" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="key-feature-container">
        <div className="container">
          <div className="key-feature-wrapper">
            <div className="kf-section-title">{product.keyFeature}</div>
            <div className="kf-row">
              <div className="kf-content-wrap order-1 order-lg-0">
                <div className="kf-title">{product.featureOneHeading}</div>
                <div className="kf-description">
                  {product.featureOneDescription}
                </div>
              </div>
              <div className="kf-img-wrap order-0 order-lg-1">
                <div className="fearure-icon right">
                  <CarIcon />
                </div>
                {product.productId === "NTSL2" ? (
                  <img src={NTSL2K1} alt="HardWired Tracker" />
                ) : product.productId === "NTDS2" ? (
                  <img src={NTDS2K1} alt="HardWired Tracker" />
                ) : product.productId === "NTSC2" ? (
                  <img src={NTSC2K1} alt="HardWired Tracker" />
                ) : product.productId === "NTSCM3" ? (
                  <img src={NTSCM3K1} alt="HardWired Tracker" />
                ) : (
                  <img src={NTSR3K1} alt="HardWired Tracker" />
                )}
              </div>
            </div>
            <div className="kf-row">
              <div className="kf-img-wrap  ">
                <div className="fearure-icon">
                  <NavigationIcon />
                </div>
                {product.productId === "NTSL2" ? (
                  <img src={NTSL2K2} alt="HardWired Tracker" />
                ) : product.productId === "NTDS2" ? (
                  <img src={NTDS2K2} alt="HardWired Tracker" />
                ) : product.productId === "NTSC2" ? (
                  <img src={NTSC2K2} alt="HardWired Tracker" />
                ) : product.productId === "NTSCM3" ? (
                  <img src={NTSCM3K2} alt="HardWired Tracker" />
                ) : (
                  <img src={NTSR3K2} alt="HardWired Tracker" />
                )}
              </div>
              <div className="kf-content-wrap ">
                <div className="kf-title">{product.featureTwoHeading}</div>
                <div className="kf-description">
                  {product.featureTwoDescription}
                </div>
              </div>
            </div>
            {/* <div className="kf-row">
              <div className="kf-content-wrap order-1 order-lg-0">
                <div className="kf-title">{product.featureThreeHeading}</div>
                <div className="kf-description">
                  {product.featureThreeDescription}
                </div>
              </div>
              <div className="kf-img-wrap order-0 order-lg-1">
                <div className="fearure-icon right">
                  <CarIcon />
                </div>
                <img src={KeyFeature1} alt="Key Feature" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

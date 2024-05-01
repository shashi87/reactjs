import React from "react";
// import HardwiredTracker from "../../../assets/images/products/hardwired-tracker.png";
import NTSL2 from "../../../assets/images/products/NTSL2/Main-small.png";
import NTDS2 from "../../../assets/images/products/NTDS2/Main-small.png";
import NTSC2 from "../../../assets/images/products/NTSC2/Main-small.png";
import NTSCM3 from "../../../assets/images/products/NTSCM3/Main-small.png";
import NTSR3 from "../../../assets/images/products/NTSR3/Main-small.png";
import "./ProductsList.scss";
import { TickMark } from "../../../assets/Icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ProductsList = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const product = t("productList", { returnObjects: true });
  const hostname = window.location.hostname;
  return (
    <>
      {hostname === "www.novotrack.co.uk" ? (
        <div className="product-list-wrapper check-products-wrapper">
          <div className="container">
            <div className="product-title-wrap">
              {hostname === "www.novotrack.co.uk"
                ? product.checkOtherProduct
                : product.ourProducts}
            </div>
            <div className="product-box-wrapper">
              <div className="product-box">
                <div className="product-tag">
                  <span>NTSL2</span>
                </div>
                <div className="product-img-wrap">
                  <img src={NTSL2} alt="NTSL2" />
                </div>
                <div className="product-detail-wrap">
                  <div className="product-detail-title-wrap">
                    <div className="product-detail-title">
                      {product.secureLink}
                    </div>
                    <div className="product-detail-subtitle">
                      {product.text1}
                    </div>
                  </div>
                  <div className="product-list-wrap">
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text2}</div>
                    </div>
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text3}</div>
                    </div>
                  </div>
                </div>
                <div className="learn-more">
                  <span onClick={() => navigate("/productdetail/NTSL2")}>
                    {product.learnMore}
                  </span>
                </div>
              </div>
              <div className="product-box">
                <div className="product-tag">
                  <span>NTSC2</span>
                </div>
                <div className="product-img-wrap">
                  <img src={NTSC2} alt="NTSC2" />
                </div>
                <div className="product-detail-wrap">
                  <div className="product-detail-title-wrap">
                    <div className="product-detail-title">{product.text4}</div>
                    <div className="product-detail-subtitle">
                      {product.text5}
                    </div>
                  </div>
                  <div className="product-list-wrap">
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text6}</div>
                    </div>
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text7}</div>
                    </div>
                  </div>
                </div>
                <div className="learn-more">
                  <span onClick={() => navigate("/productdetail/NTSC2")}>
                    {product.learnMore}
                  </span>
                </div>
              </div>
              <div className="product-box">
                <div className="product-tag">
                  <span>NTSCM3</span>
                </div>
                <div className="product-img-wrap">
                  <img src={NTSCM3} alt="NTSCM2" />
                </div>
                <div className="product-detail-wrap">
                  <div className="product-detail-title-wrap">
                    <div className="product-detail-title">{product.text8}</div>
                    <div className="product-detail-subtitle">
                      {product.text9}
                    </div>
                  </div>
                  <div className="product-list-wrap">
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text10}</div>
                    </div>
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text11}</div>
                    </div>
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text12}</div>
                    </div>
                  </div>
                </div>
                <div className="learn-more">
                  <span onClick={() => navigate("/productdetail/NTSCM3")}>
                    {product.learnMore}
                  </span>
                </div>
              </div>
              <div className="product-box">
                <div className="product-tag">
                  <span>NTDS2 </span>
                </div>
                <div className="product-img-wrap">
                  <img src={NTDS2} alt="NTDS2 " />
                </div>
                <div className="product-detail-wrap">
                  <div className="product-detail-title-wrap">
                    <div className="product-detail-title">{product.text13}</div>
                    <div className="product-detail-subtitle">
                      {product.text14}
                    </div>
                  </div>
                  <div className="product-list-wrap">
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text15}</div>
                    </div>
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text16}</div>
                    </div>
                  </div>
                </div>
                <div className="learn-more">
                  <span onClick={() => navigate("/productdetail/NTDS2")}>
                    {product.learnMore}
                  </span>
                </div>
              </div>
              <div className="product-box">
                <div className="product-tag">
                  <span>NTSR3 </span>
                </div>
                <div className="product-img-wrap">
                  <img src={NTSR3} alt="NTSR3 " />
                </div>
                <div className="product-detail-wrap">
                  <div className="product-detail-title-wrap">
                    <div className="product-detail-title">{product.text17}</div>
                    <div className="product-detail-subtitle">
                      {product.text18}
                    </div>
                  </div>
                  <div className="product-list-wrap">
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text19}</div>
                    </div>
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text20}</div>
                    </div>
                  </div>
                </div>
                <div className="learn-more">
                  <span onClick={() => navigate("/productdetail/NTSR3")}>
                    {product.learnMore}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="product-list-wrapper">
          <div className="container">
            <div className="product-title-wrap">{product.ourProducts}</div>
            <div className="product-box-wrapper">
              <div className="product-box">
                <div className="product-tag">
                  <span>NTSL2</span>
                </div>
                <div className="product-img-wrap">
                  <img src={NTSL2} alt="NTSL2" />
                </div>
                <div className="product-detail-wrap">
                  <div className="product-detail-title-wrap">
                    <div className="product-detail-title">
                      {product.secureLink}
                    </div>
                    <div className="product-detail-subtitle">
                      {product.text1}
                    </div>
                  </div>
                  <div className="product-list-wrap">
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text2}</div>
                    </div>
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text3}</div>
                    </div>
                  </div>
                </div>
                <div className="learn-more">
                  <span onClick={() => navigate("/productdetail/NTSL2")}>
                    {product.learnMore}
                  </span>
                </div>
              </div>
              <div className="product-box">
                <div className="product-tag">
                  <span>NTSC2</span>
                </div>
                <div className="product-img-wrap">
                  <img src={NTSC2} alt="NTSC2" />
                </div>
                <div className="product-detail-wrap">
                  <div className="product-detail-title-wrap">
                    <div className="product-detail-title">{product.text4}</div>
                    <div className="product-detail-subtitle">
                      {product.text5}
                    </div>
                  </div>
                  <div className="product-list-wrap">
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text6}</div>
                    </div>
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text7}</div>
                    </div>
                  </div>
                </div>
                <div className="learn-more">
                  <span onClick={() => navigate("/productdetail/NTSC2")}>
                    {product.learnMore}
                  </span>
                </div>
              </div>
              <div className="product-box">
                <div className="product-tag">
                  <span>NTSCM3</span>
                </div>
                <div className="product-img-wrap">
                  <img src={NTSCM3} alt="NTSCM2" />
                </div>
                <div className="product-detail-wrap">
                  <div className="product-detail-title-wrap">
                    <div className="product-detail-title">{product.text8}</div>
                    <div className="product-detail-subtitle">
                      {product.text9}
                    </div>
                  </div>
                  <div className="product-list-wrap">
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text10}</div>
                    </div>
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text11}</div>
                    </div>
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text12}</div>
                    </div>
                  </div>
                </div>
                <div className="learn-more">
                  <span onClick={() => navigate("/productdetail/NTSCM3")}>
                    {product.learnMore}
                  </span>
                </div>
              </div>
              <div className="product-box">
                <div className="product-tag">
                  <span>NTDS2 </span>
                </div>
                <div className="product-img-wrap">
                  <img src={NTDS2} alt="NTDS2 " />
                </div>
                <div className="product-detail-wrap">
                  <div className="product-detail-title-wrap">
                    <div className="product-detail-title">{product.text13}</div>
                    <div className="product-detail-subtitle">
                      {product.text14}
                    </div>
                  </div>
                  <div className="product-list-wrap">
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text15}</div>
                    </div>
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text16}</div>
                    </div>
                  </div>
                </div>
                <div className="learn-more">
                  <span onClick={() => navigate("/productdetail/NTDS2")}>
                    {product.learnMore}
                  </span>
                </div>
              </div>
              <div className="product-box">
                <div className="product-tag">
                  <span>NTSR3 </span>
                </div>
                <div className="product-img-wrap">
                  <img src={NTSR3} alt="NTSR3 " />
                </div>
                <div className="product-detail-wrap">
                  <div className="product-detail-title-wrap">
                    <div className="product-detail-title">{product.text17}</div>
                    <div className="product-detail-subtitle">
                      {product.text18}
                    </div>
                  </div>
                  <div className="product-list-wrap">
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text19}</div>
                    </div>
                    <div className="product-list-row">
                      <div className="product-icon-wrap">
                        <TickMark />
                      </div>
                      <div className="product-list">{product.text20}</div>
                    </div>
                  </div>
                </div>
                <div className="learn-more">
                  <span onClick={() => navigate("/productdetail/NTSR3")}>
                    {product.learnMore}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsList;

import React, { useEffect } from "react";
import "./ErrorPage.scss";
import { ErrorIcon } from "../../assets/Icons";
import { useTranslation } from "react-i18next";

const FourZeroFour = () => {
  useEffect(() => {
    document.body?.classList.add("remove-body-padding");
    document.getElementById("header")?.classList.add("header-bg-blue");
    return () => {
      document.body.classList.remove("remove-body-padding");
      document.getElementById("header")?.classList.remove("header-bg-blue");
    };
  }, []);
  const { t } = useTranslation();
  const error = t("error", { returnObjects: true });
  return (
    <div className="error-page-wrapper">
      <div className="container">
        <div className="error-page-content">
          <div className="error-page-icon">
            <ErrorIcon />
          </div>
          <div className="error-page-title">{error.text1}</div>
          <div className="error-page-description">{error.text2}</div>
        </div>
      </div>
    </div>
  );
};

export default FourZeroFour;

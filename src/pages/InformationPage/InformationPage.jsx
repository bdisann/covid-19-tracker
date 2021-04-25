import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./InformationPage.css";

const InformationPage = () => {
  return (
    <div className="informationPage">
      <div className="informationPage__button">
        <Link className="informationPage__buttonLink" to="/">
          Back to Homepage
        </Link>
      </div>
      <div className="informationPage__col">
        <div className="informationPage__rowLeftCon">
          <div className="informationPage__rowLeft">
            <img
              src="https://i.ytimg.com/vi/VOeJrTkH67A/maxresdefault.jpg"
              alt="coronavirus"
            />
          </div>
          <p>
            <small>
              <i>
                Photo Source:
                (https://i.ytimg.com/vi/VOeJrTkH67A/maxresdefault.jpg)
              </i>
            </small>
          </p>
        </div>
        <div className="informationPage__rowRight">
          <h1>CORONA VIRUS</h1>
          <p>
            <b>
              Coronavirus disease (COVID-19) is an infectious disease caused by
              a newly discovered coronavirus.
            </b>
          </p>
          <p>
            Most people infected with the COVID-19 virus will experience mild to
            moderate respiratory illness and recover without requiring special
            treatment. Older people, and those with underlying medical problems
            like cardiovascular disease, diabetes, chronic respiratory disease,
            and cancer are more likely to develop serious illness.
          </p>
          <p>
            The best way to prevent and slow down transmission is to be well
            informed about the COVID-19 virus, the disease it causes and how it
            spreads. Protect yourself and others from infection by washing your
            hands or using an alcohol based rub frequently and not touching your
            face.
          </p>
          <p>
            The COVID-19 virus spreads primarily through droplets of saliva or
            discharge from the nose when an infected person coughs or sneezes,
            so it’s important that you also practice respiratory etiquette (for
            example, by coughing into a flexed elbow).
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InformationPage;

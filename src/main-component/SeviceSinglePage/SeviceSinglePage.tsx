import React, { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import { getServiceBySlug } from "../../data/servicesData";
import ServiceDetails from "./ServiceDetails";

const SeviceSinglePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const service = getServiceBySlug(searchParams.get("service"));

  return (
    <Fragment>
      <div className="about-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PageTitle pageTitle={service.title} pagesub="Service details" />
            <ServiceDetails />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default SeviceSinglePage;

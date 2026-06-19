import React, { Fragment, useEffect } from "react";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import ProjectSection from "./ProjectSection";

const ProjectPage: React.FC = () => {
  useEffect(() => {
    document.title = "Our Projects | Zentigo Solution Digital Software Agency";
  }, []);

  return (
    <Fragment>
      <div className='ai-agency inner-page'>
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PageTitle pageTitle="Our Projects" pagesub="Our Projects" />
            <ProjectSection/>
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectPage;

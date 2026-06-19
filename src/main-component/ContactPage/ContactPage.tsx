import React, { Fragment, useEffect } from "react";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import ContactInfoSection from "./ContactInfoSection";
import ContactForm from "../../components/ContactFrom/ContactForm";

// import background image
import contactBg from "../../images/bg/contact-bg02.png";

const GULSHAN_MAP_EMBED =
  "https://maps.google.com/maps?q=Gulshan+1,+Dhaka,+Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed";

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us | Zentigo Solution Digital Software Agency";
  }, []);

  return (
    <Fragment>
      <div className="about-page inner-page contact-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PageTitle pageTitle="Contact us" pagesub="Contact us" />
            <ContactInfoSection />
            <section className="contact">
              <div className="container">
                <div
                  className="xb-contact-wrap xb-border bg_img"
                  style={{
                    backgroundImage: `url(${contactBg})`,
                  }}
                >
                  <div className="xb-contact-form xb-main-contact xb-border">
                    <div className="form-heading text-center mb-30">
                      <h3 className="title">Ready to start your project?</h3>
                      <p className="sub-title clr-white">
                        Visit us in Gulshan 1, Dhaka — or send a message and our
                        team will get back to you shortly.
                      </p>
                    </div>

                    <ContactForm formClassName="xb-contact-input-form main-contact-input-form" />
                  </div>

                  {/* Google Map Embed */}
                  <div className="google-map">
                    <iframe
                      src={GULSHAN_MAP_EMBED}
                      loading="lazy"
                      title="Zentigo Solution office — Gulshan 1, Dhaka, Bangladesh"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ width: "100%", height: "100%", border: 0 }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default ContactPage;
import React from "react";
import arrowWhite from "../../images/icon/rotate-arrow-white02.svg";
import arrowBlack from "../../images/icon/rotate-arrow-black03.svg";

const locationImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Gulshan+1,+Dhaka,+Bangladesh";

const contactData = {
  location: "Gulshan 1, Dhaka, Bangladesh",
  address: "Gulshan 1, Dhaka 1212, Bangladesh",
  phone: "+8801878265664",
  email: "zentigosolution@gmail.com",
  img: locationImage,
};

const ContactInfoSection: React.FC = () => {
  return (
    <section className="contact pb-150">
      <div className="container">
        <div className="row mt-none-30 justify-content-center">
          <div className="col-lg-6 col-md-10 col-12 mt-30">
            <div className="xb-contact-items contact-info-card xb-border">
              <div className="xb-item--inner">
                <div className="xb-img">
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={contactData.img}
                      alt="Zentigo Solution office Gulshan 1"
                      loading="lazy"
                    />
                  </a>
                </div>

                <div className="xb-item--holder">
                  <p className="xb-item--location">{contactData.location}</p>
                  <span className="xb-item--contact_info">{contactData.address}</span>
                  <a
                    className="xb-item--contact_info"
                    href={`tel:${contactData.phone.replace(/\s/g, "")}`}
                  >
                    {contactData.phone}
                  </a>
                  <a
                    className="xb-item--contact_info"
                    href={`mailto:${contactData.email}`}
                  >
                    {contactData.email}
                  </a>

                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="thm-btn form-btn mt-45"
                  >
                    VIEW LOCATION
                    <span className="xb-icon">
                      <img src={arrowWhite} alt="icon" />
                      <img src={arrowBlack} alt="icon" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;

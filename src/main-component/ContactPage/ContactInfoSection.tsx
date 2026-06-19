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
  phone: "+880 1712-345678",
  email: "hello@aivora.com",
  img: locationImage,
};

const ContactInfoSection: React.FC = () => {
  return (
    <section className="contact pb-150">
      <div className="container">
        <div className="row mt-none-30 justify-content-center">
          <div className="col-lg-5 col-md-8 mt-30">
            <div className="xb-contact-items img-hove-effect xb-border">
              <div className="xb-item--inner">
                <div className="xb-img">
                  {[...Array(4)].map((_, i) => (
                    <a
                      key={i}
                      href={MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={contactData.img} alt="Aivora office Gulshan 1" />
                    </a>
                  ))}
                </div>

                <div className="xb-item--holder">
                  <p className="xb-item--location">{contactData.location}</p>
                  <span className="xb-item--contact_info">{contactData.address}</span>
                  <span className="xb-item--contact_info">{contactData.phone}</span>
                  <span className="xb-item--contact_info">{contactData.email}</span>

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

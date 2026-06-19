import React from "react";
import { Link } from "react-router-dom";

// Background image
import serviceBg from "../../images/bg/service-gradient-bg.png";
import { SERVICES, getServiceDetailsLink } from "../../data/servicesData";

const ServiceSection: React.FC = () => {
  // ========================
  // ICON SVG
  // ========================
  const arrowIcon = (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6.29004"
        y="21.4111"
        width="22.36"
        height="2.83936"
        transform="rotate(-40.2798 6.29004 21.4111)"
        fill="white"
      />
      <rect
        x="9.44824"
        y="7.57031"
        width="2.83936"
        height="2.83936"
        transform="rotate(-40.2798 9.44824 7.57031)"
        fill="white"
      />
      <rect
        x="13.4492"
        y="7.90015"
        width="2.83936"
        height="2.83936"
        transform="rotate(-40.2798 13.4492 7.90015)"
        fill="white"
      />
      <rect
        x="17.4512"
        y="8.23047"
        width="2.83936"
        height="2.83936"
        transform="rotate(-40.2798 17.4512 8.23047)"
        fill="white"
      />
      <rect
        x="21.123"
        y="12.5627"
        width="2.83936"
        height="2.83936"
        transform="rotate(-40.2798 21.123 12.5627)"
        fill="white"
      />
      <rect
        x="20.793"
        y="16.5649"
        width="2.83936"
        height="2.83936"
        transform="rotate(-40.2798 20.793 16.5649)"
        fill="white"
      />
      <rect
        x="20.4619"
        y="20.5669"
        width="2.83936"
        height="2.83936"
        transform="rotate(-40.2798 20.4619 20.5669)"
        fill="white"
      />
    </svg>
  );

  // ========================
  // ARRAY DATA
  // ========================
  const services = SERVICES.map((service) => ({
    title: service.title,
    content: service.shortDesc,
    images: [service.heroImage, service.heroImage, service.heroImage, service.heroImage],
    link: getServiceDetailsLink(service.slug),
  }));

  // ========================
  // RETURN SECTION
  // ========================
  return (
    <section
      className="service pos-rel bg_img"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <div className="container">
        <div className="row mt-none-30">
          {services.map((service, index) => (
            <div className="col-lg-6 mt-30" key={index}>
              <div className="xb-ser-item xb-border img-hove-effect">
                <div className="xb-item--inner">
                  <h3 className="xb-item--title border-effect">
                    <Link to={service.link}>{service.title}</Link>
                  </h3>

                  <Link className="xb-item--icon" to={service.link}>
                    {arrowIcon}
                  </Link>

                  <p className="xb-item--content">{service.content}</p>

                  <div className="xb-item--img xb-img">
                    {service.images.map((img, i) => (
                      <Link key={i} to={service.link}>
                        <img src={img} alt={service.title} loading="lazy" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// ✅ Images
import bgImage from "../../images/bg/testimonial-bg.png";
import gifShape from "../../images/icon/animated-gif03.gif";
import avatar1 from "../../images/avatar/img01.jpg";
import avatar2 from "../../images/avatar/img02.jpg";
import avatar3 from "../../images/avatar/img03.jpg";
import avatar4 from "../../images/avatar/img04.jpg";
import avatar5 from "../../images/avatar/img05.jpg";

const testimonials = [
  {
    id: 1,
    source: "Clutch",
    rating: "5.0",
    content:
      "“They delivered a production-ready SaaS platform on schedule. Communication was clear throughout, and the architecture scales cleanly as we onboard enterprise clients.”",
    name: "Sarah Chen",
    designation: "VP Product — Meridian Labs",
    avatar: avatar1,
  },
  {
    id: 2,
    source: "GoodFirms",
    rating: "4.9",
    content:
      "“Our mobile app launch exceeded expectations. The team balanced UX polish with performance, and their post-launch support has been exceptional.”",
    name: "James Okonkwo",
    designation: "CEO — FieldPro",
    avatar: avatar2,
  },
  {
    id: 3,
    source: "Clutch",
    rating: "5.0",
    content:
      "“The ERP system they built transformed how we manage operations. Reliable, well-documented, and built to handle our growth without disruption.”",
    name: "Elena Vasquez",
    designation: "COO — Meridian Supply Co.",
    avatar: avatar3,
  },
  {
    id: 4,
    source: "GoodFirms",
    rating: "5.0",
    content:
      "“From wireframes to final product, their design work elevated our brand and improved user adoption. Professional, responsive, and detail-oriented.”",
    name: "Priya Ramirez",
    designation: "Head of Product — Atlas Digital",
    avatar: avatar4,
  },
  {
    id: 5,
    source: "Clutch",
    rating: "4.8",
    content:
      "“They integrated intelligent features into our platform without overcomplicating the product. The result improved efficiency and delivered real business impact.”",
    name: "Miguel Torres",
    designation: "Director — Finexa Capital",
    avatar: avatar5,
  },
  {
    id: 6,
    source: "Clutch",
    rating: "5.0",
    content:
      "“Transparent timelines, strong engineering quality, and a team that genuinely cares about outcomes. We consider them a long-term technology partner.”",
    name: "Sebastian Clark",
    designation: "CTO — SwiftLogix",
    avatar: avatar3,
  },
];

const TestimonialSection: React.FC = () => {
  useEffect(() => {
    const bgEl = document.querySelector<HTMLElement>(".testimonial.bg_img");
    if (bgEl) bgEl.style.backgroundImage = `url(${bgImage})`;
  }, []);

  return (
    <section className="testimonial pb-150 bg_img">
      <div className="container">
        <div className="sec-title sec-title-center tes-sec-title text-center mb-50">
          <span className="sub-title mb-15">Client Testimonials</span>
          <h2 className="title">
            Trusted by teams who value
            <img src={gifShape} alt="shape" /> quality and reliability
          </h2>
        </div>
      </div>

      <div className="xb-testimonial-slider">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={400}
          spaceBetween={30}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1700: { slidesPerView: 5 },
            1600: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="xb-testimonial-item">
                <div className="xb-item--inner xb-border">
                  <ul className="xb-item--rating list-unstyled ul_li">
                    <li>
                      <i className="fa-solid fa-star-sharp"></i>
                    </li>
                    <li>{item.source}</li>
                    <li>{item.rating}</li>
                  </ul>
                  <p className="xb-item--content">{item.content}</p>
                  <div className="xb-item--author ul_li">
                    <div className="xb-item--avatar">
                      <img src={item.avatar} alt={item.name} />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--name">{item.name}</h3>
                      <span className="xb-item--desig">{item.designation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;

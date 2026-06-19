import React, { useState } from "react";
import type { ServiceProcessStep } from "../../data/servicesData";

interface ServiceFaqProps {
  processSteps: ServiceProcessStep[];
}

const ServiceFaq: React.FC<ServiceFaqProps> = ({ processSteps }) => {
  const [active, setActive] = useState<number>(processSteps[0]?.id ?? 1);

  const toggleAccordion = (index: number) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <div className="service-process-wrap pt-120 pb-125">
      <div className="row mt-none-50 align-items-center">
        <div className="col-lg-6 mt-50">
          <h2 className="details-content-title mb-40">Service process</h2>

          <div className="service_process_faq">
            <div className="accordion">
              {processSteps.map((item) => (
                <div className="accordion-item" key={item.id}>
                  <div
                    className={`accordion-button ${
                      active === item.id ? "" : "collapsed"
                    }`}
                    role="button"
                    onClick={() => toggleAccordion(item.id)}
                  >
                    {item.title}
                  </div>

                  <div
                    className={`accordion-collapse collapse ${
                      active === item.id ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      <p className="m-0">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-50">
          <ul className="content_layer_group list-unstyled">
            {processSteps.map((item) => (
              <li
                key={item.id}
                onClick={() => toggleAccordion(item.id)}
                className={active === item.id ? "active" : ""}
              >
                <span>{item.title.replace(/^\d+\.\s/, "")}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceFaq;

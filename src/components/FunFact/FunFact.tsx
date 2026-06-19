import React from "react";
import CountUp from "react-countup";

interface FunFactItem {
  title: string;
  subTitle: string;
}

interface FunFactProps {
  fClass?: string;
}

const funFactData: FunFactItem[] = [
  {
    title: "120",
    subTitle: "Projects Delivered",
  },
  {
    title: "45",
    subTitle: "Active Clients",
  },
  {
    title: "8",
    subTitle: "Years in Business",
  },
  {
    title: "35",
    subTitle: "Engineers & Designers",
  },
];

const FunFact: React.FC<FunFactProps> = ({ fClass }) => {
  return (
    <section className={`wpo-fun-fact-section ${fClass || ""}`}>
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-fun-fact-grids clearfix">
              {funFactData.map((funfact, index) => (
                <div className="grid" key={index}>
                  <div className="info">
                    <h3>
                      <span>
                        <CountUp
                          end={parseInt(funfact.title, 10)}
                          enableScrollSpy
                        />
                      </span>
                      +
                    </h3>
                    <p>{funfact.subTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span id="counter" className="d-none" />
    </section>
  );
};

export default FunFact;

import * as React from "react";
import "./HeroStyles.css";

const Hero = () => {
  return (
    <div className="herobg">
      <div className="heroUpper">
        <div className="heroRow">
          <div className="heroColumn">
            <h1 className="upperTitle">
              Let's growth your business <br /> with us
            </h1>
            <div className="upperContent">
              <div className="upperMaster">
                <p>
                  Sapiente, assumenda suscipit autem ab expedita dignissimos,
                  corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                  culpa qui eos ullam minima quo, consequuntur.
                </p>
              </div>
            </div>
            <button className="herobtn">Get in Touch</button>
            <img
              src="https://untree.co/demos/impact/images/persons-group-1.png"
              alt="image1"
              height="100%"
              className="person1"
            />
            <img
              src="https://untree.co/demos/impact/images/persons-group-2.png"
              alt="image2"
              height="100%"
              className="person2"
            />
          </div>
        </div>
      </div>

      <div className="heroLower">
        <div className="lowerCard">
          <div className="lowerRow">
            <div className="lowerColumn">
              <div className="lowerFeature">
                <div className="featureIcon">
                  <span className="icon-layers"></span>
                </div>
                <div className="featureText">
                  <h1>
                    Sapiente, assumenda suscipit autem ab expedita dignissimos,
                    corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                    culpa qui eos ullam minima quo, consequuntur.
                  </h1>
                </div>
              </div>
            </div>
            <div className="lowerColumn">
              <div className="lowerInnerCard">
                <h1>
                  Sapiente, assumenda suscipit autem ab expedita dignissimos,
                  corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                  culpa qui eos ullam minima quo, consequuntur.
                </h1>
              </div>
            </div>
            <div className="lowerColumn">
              <div className="lowerInnerCard">
                <h1>
                  Sapiente, assumenda suscipit autem ab expedita dignissimos,
                  corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                  culpa qui eos ullam minima quo, consequuntur.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

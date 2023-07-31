import React, { Component } from "react";
import map from "../img/map.jpg";

class TopCont01 extends Component {
  render() {
    return (
      <div className="TopCont01">
        <div className="Left">
          <h2
            style={{ fontSize: "68px", fontWeight: "900",  paddingTop: "1%" }}
          >
            Have you been <br /> to my city?
          </h2>
          <br />
          <p style={{ fontSize: "30px" }}>
            {" "}
            Well then, let me tell you about it
          </p>
          <button
            style={{
              marginTop: "10%", 
              background: "black",
              fontSize: "24px",
              padding: "20px 50px",
              color: "white",
            }}
          >
           About Anambra
          </button>
        </div>

        <div className="Right">
          <div
            className="square1"
            style={{ border: "solid 8px", padding: "10px" }}
          >
            <div
              className="square2"
              style={{ border: "solid 2px", padding: "10px" }}
            >
              <img src={map} alt="" className="map" />

              <center>
                <div>
                  <h1>Anambra</h1>
                  <p>Nigeria</p>
                  <p>10.52N / 7.44E</p>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TopCont01;

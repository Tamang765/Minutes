import React from "react";
import "./Header.scss";
import mobile from "../../media/header_mobile.png";
import { TfiMobile } from "react-icons/tfi";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="overlay">
          <div className="pageInfo">
            <h2 className="title">
              The Perfect <span>app</span> <br />
              <span>landing</span> page
            </h2>
            <p>
              Consequat est non consequat non. Nisi elit aliquip nostrud nisi
              Lorem adipisicing mollit culpa nostrud proident. Enim magna
              officia proident ipsum.
            </p>
            <div className=" btn available_app">
              <div className="icon_phone">
                <span>
                  <TfiMobile className="mobile_icon" />
                </span>
              </div>
              <div className="icon_details">
                <span>Available For download</span>
                <h4>APP STORE</h4>
              </div>
            </div>
            <small className="text">
              For <a href="/">Appstore</a> and <a href="/">Googleplay</a>
            </small>
          </div>
          <div className="bg-img">
            <img src={mobile} alt="" className="overlapImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

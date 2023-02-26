import { React } from "react";

const NewCBanner = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mt-5 mt-lg-0">
          <a href>
            <img src={props.imgSrc_1} alt className="img-fluid" />
          </a>
        </div>
        <div className="col-12 col-md-6 mt-5 mt-lg-0">
          <a href>
            <img src={props.imgSrc_2} alt className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewCBanner;

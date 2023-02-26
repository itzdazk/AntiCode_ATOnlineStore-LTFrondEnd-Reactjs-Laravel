import React from "react";

class Banner extends React.Component {
  render() {
    const { classBanner, imgSource, link, ...others } = this.props;
    return (
      <div className={classBanner}>
        <a href={link}>
          <img src={imgSource} alt className="img-fluid" />
        </a>
      </div>
    );
  }
}

export default Banner;

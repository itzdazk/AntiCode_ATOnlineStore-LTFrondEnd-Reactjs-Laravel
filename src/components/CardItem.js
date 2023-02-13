import React from "react";

const CardItem = (props) => {
  return (
    <div className={props.classProduct} id={props.idWidth}>
      <div className="card-item">
        <a href={props.aHref} id={props.dId}>
          <img src={props.imgSrc} className="item-img img-fluid" alt />
          <p className="item-sale">{props.itemSale}</p>
          <p className="item-name">{props.itemName}</p>
          <p className="item-price">{props.itemPrice}đ</p>
        </a>
      </div>
    </div>
  );
};

export default CardItem;

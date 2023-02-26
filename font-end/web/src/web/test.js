import React, { useState, useEffect } from "react";
import CardItem from "./components/CardItem";

const Test = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/clothes-stores-online-db/public/api/product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);

  return (
    <>
      {products.map((data, index) => {
        return (
          <>
            <CardItem
              classProduct="newin__product-item "
              idWidth="slide-width"
              aHref={`product-detail/${index}`}
              dId="disable-a1"
              imgSrc="//product.hstatic.net/1000383583/product/_5506_c92c7c96dd574f61ace222a43a4231d3_large.png"
              itemSale="30%"
              itemName={data.Name}
              itemPrice={data.Price}
            />
          </>
        );
      })}
      ;
    </>
  );
};

export default Test;

// import React, { useState, useEffect } from "react";
// import CardItem from "./components/CardItem";

// const Test = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/image")
//       .then((response) => response.json())
//       .then((data) => setProducts(data));
//   }, []);
//   console.log(products);

//   return (
//     <>
//       {products.map((data, index) => {
//         return (
//           <>
//             <CardItem
//               classProduct="newin__product-item "
//               idWidth="slide-width"
//               aHref={`product-detail/${index}`}
//               dId="disable-a1"
//               imgSrc={`http://localhost/clothes-stores-online-db/public/uploads/images/${data.Image}`}
//               itemSale="30%"
//               itemName={data.IMG_ID}
//               itemPrice={data.PRO_ID}
//             />
//           </>
//         );
//       })}
//       ;
//     </>
//   );
// };

// export default Test;

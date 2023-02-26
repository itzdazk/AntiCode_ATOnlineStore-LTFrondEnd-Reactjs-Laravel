const TitleFilter = (prop) => {
  return (
    <div>
      <div className="product__main-header mt-5 row justify-content-center">
        <div className="main-tittle col-12 col-lg-8 mt-lg-0">
          <h2 className="text-center text-lg-start">{prop.ftitle}</h2>
        </div>
        <div className="main-sort col-4 d-flex mt-3 mt-lg-0">
          <select name="sort" id="sort" className="w-100">
            <option value>Giá: Tăng dần</option>
            <option value>Giá: Giảm dần</option>
            <option value>Tên: Z-A</option>
            <option value>Tên: A-Z</option>
            <option value>Mới nhất</option>
            <option value>Cũ nhất</option>
            <option value>Bán chạy nhất</option>
            <option value>Tồn kho: Giảm dần</option>
          </select>
        </div>
      </div>
      <div className="product__main-filter mt-5 row">
        <div className="filter-tittle col-12 col-lg-auto d-flex align-items-center justify-content-center mb-3 mb-lg-0">
          <p>
            <span>
              {" "}
              <i className="fa-sharp fa-solid fa-filter" />
            </span>{" "}
            BỘ LỌC
          </p>
        </div>
        <div className="filter__sort-price filter-sort col">
          <div className="main-sort col d-flex mt-lg-0 justify-content-center">
            <select name="sort" id="sort" className="w-100">
              <option value>GIÁ SẢN PHẨM</option>
            </select>
          </div>
        </div>
        <div className="filter__sort-color filter-sort col">
          <div className="main-sort col d-flex mt-lg-0 justify-content-center">
            <select name="sort" id="sort" className="w-100">
              <option value>MÀU SẮC</option>
            </select>
          </div>
        </div>
        <div className="filter__sort-size filter-sort col">
          <div className="main-sort col d-flex mt-lg-0 justify-content-center">
            <select name="sort" id="sort" className="w-100">
              <option value>SIZE</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleFilter;

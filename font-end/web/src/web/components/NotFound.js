import React from "react";
const NotFound = () => {
  return (
    <div className="pageNot py-5 my-5">
      <div className=" container py-5 my-5">
        <div className="row text-center py-5 my-5">
          <h1 className="">Không tìm thấy trang</h1>
          <p className=" subtext pt-3 ">
            Xin lỗi, chúng tôi không tìm thấy trang này
          </p>
          <a href="/home" className="text-decoration-none text-light py-5">
            <button className="backhomepage-btn">TRỞ VỀ TRANG CHỦ</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import tuyendung from "../img/tuyendung.png";

const Recruitment = () => {
  return (
    <>
      <div className="container">
        <div className="poster">
          <img src={tuyendung} className="img-fluid" alt />
        </div>
        <div className="content mt-5">
          <div className="h5" style={{ fontWeight: 500 }}>
            ATC TUYỂN DỤNG NHÂN SỰ
          </div>
          <p className style={{ fontSize: "small" }}>
            Người viết: ATC lúc 15.05.2022 ATC TUYỂN DỤNG
          </p>
          <p>
            <span className="fw-bold">𝐖𝐄 𝐀𝐑𝐄 𝐇𝐈𝐑𝐈𝐍𝐆</span> - Để mở rộng và phát
            triển những dự án sắp tới, ATC mời các bạn hãy gia nhập đại gia đình
            của ATC nàooo
          </p>
          <p>
            Tụi mình cần tuyển nhân sự vào các vị trí: <br />
            - TikTok Creative <br />
            - E-Commerce Manager (Quản Lý Thương Mại Điện Tử) <br />
            - Fashion Designer ( Thiết kế thời trang ) <br />
            - Graphic Designer ( Thiết kế đồ hoạ ) <br />
            - Marketing Assistant ( Trợ lý Marketing ) <br />
            - Marketing Manager ( Quản lý Marketing ) <br />
            - Sales Assistant ( Nhân viên bán hàng ) : Lưu ý vị trí tuyển dụng
            này nộp đơn ứng tuyển qua mail ATC.tuyendung@gmail.com <br />
            - Warehouse Staff ( Nhân viên kho ) : Lưu ý vị trí tuyển dụng này
            nộp đơn ứng tuyển qua mail ATC.tuyendung@gmail.com <br />
          </p>
          <p>
            Tất cả các vị trí nhân sự đều làm việc tại chi nhánh ATC ở TPHCM.
            Xem thêm JD của từng vị trí tại:
            <span className="h5" style={{ cursor: "pointer" }}>
              {" "}
              Tại đây
            </span>{" "}
            <br />
          </p>
          <p>
            ATC rất hi vọng các bạn trẻ, đầy nhiệt huyết sẽ cùng với ATC tạo nên
            1 cộng đồng streetwear tại Việt Nam đáng tự hào.
          </p>
        </div>
        <div className="col-xs-12 d-md-none mb-3">
          <div className="card bg-light text-dark">
            <div className="card-body text-uppercase text-center">
              Bài Viết mới nhất
              <i className="chevron-down-icon fa-solid fa-chevron-down" />
            </div>
          </div>
        </div>
        <div className="col-xs-12 d-md-none">
          <div className="card bg-light text-dark">
            <div className="card-body text-uppercase text-center">
              Blog mới nhất
              <i className="chevron-down-icon fa-solid fa-chevron-down" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recruitment;

import img1 from "../img/th1.png";
import img2 from "../img/th2.png";

const BrandStory = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-5">
            <p className="fw-bold h5">
              CHÚNG TÔI TIN TƯỞNG VÀO VIỆC GIỮ MỌI THỨ ĐƠN GIẢN: HÌNH CHỤP TẠO
              TIẾN ĐỘ VÀ QUẦN ÁO TRONG TỦ QUẦN ÁO ĐƯỢC BÁN VỚI GIÁ HỢP LÝ.
            </p>
            <p className="mt-5">
              <span className="fw-bold"> THIẾT KẾ TIẾN BỘ</span>
              <br />
              <br />
              Đội ngũ những người kỳ cựu trong ngành của chúng tôi không ngừng
              thiết kế các kiểu dáng mới và thử nghiệm các loại vải trong studio
              ở trung tâm thành phố Los Angeles của chúng tôi để luôn đi đầu
              trong lĩnh vực thời trang. Phong cách luôn phát triển, chúng tôi
              cũng vậy.
            </p>
          </div>
          <div className="col-md-7">
            <img src={img1} className="img-thumbnail" alt />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-7">
            <img src={img2} className="img-thumbnail" alt />
          </div>
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <p className="fw-bold text-start">GIA CẢ HỢP LY</p>
            <p>
              Các nhà bán lẻ truyền thống đánh dấu sản phẩm của họ 5-8 lần. Mô
              hình kinh doanh của chúng tôi cho phép chúng tôi bán trực tiếp
              chất lượng tương tự cho bạn với giá chỉ bằng một phần nhỏ.
            </p>
          </div>
        </div>
        <div
          className="mt-5 d-flex flex-column justify-content-center"
          style={{ background: "#dadada", padding: 20 }}
        >
          <p className="fw-bold">CÁCH CHÚNG TÔI LÀM NÓ</p>
          <p className>
            Chúng tôi chỉ bán trực tuyến và không sử dụng nhà bán lẻ. Bằng cách
            này, chúng tôi có thể tránh được các khoản chênh lệch lớn liên quan
            đến bán lẻ truyền thống.
          </p>
          <p className>
            Chúng tôi đã sử dụng nhiều năm kinh nghiệm trong ngành để tìm những
            nhà máy phù hợp có thể tạo ra những sản phẩm may mặc chất lượng cao
            đáp ứng các tiêu chuẩn của chúng tôi.
          </p>
          <p className>
            húng tôi sản xuất với số lượng hạn chế để tránh hạ giá hoặc nhập kho
            quá nhiều, vì vậy chúng tôi có thể định giá hợp lý ngay từ đầu.
          </p>
        </div>
      </div>
    </>
  );
};

export default BrandStory;

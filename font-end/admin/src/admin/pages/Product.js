import React, { useState, useEffect, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import productService from "../../services/productService";
import categoryService from "../../services/categoryService";
import imageService from "../../services/imageService";
import productdetailService from "../../services/pdetailService";
import { toast } from "react-toastify";
import productdetail from "./../../services/pdetailService";
const Products = (props) => {
  const [message, setMessage] = useState();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    product: { PRO_ID: 0 },
    detail: [{ SKU: "" }, {}, {}, {}],
  });
  const [modalShow, setShowModal] = useState(false);
  const [tmpSize, setTmpsize] = useState(["S", "M", "L", "XL"]);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const [producdetails, setProductdetails] = useState([]);
  const [producdetail, setProductdetail] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [dimages, setDimages] = useState([]);
  const [images, setImages] = useState([]);

  const [sizeS, setSizeS] = useState();
  const [sizeM, setSizeM] = useState([]);
  const [sizeL, setSizeL] = useState([]);
  const [sizeXL, setSizeXL] = useState([]);

  const proCate = useRef("");
  const proName = useRef("");
  const proPrice = useRef(null);
  const proSKU = useRef("");
  const proColor = useRef("");
  const proSizeS = useRef("");
  const proSizeM = useRef("");
  const proSizeL = useRef("");
  const proSizeXL = useRef("");
  const proDES = useRef("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    productService.list().then((res) => setProducts(res));
    categoryService.list().then((res) => setCategorys(res));
    imageService.list().then((res) => setDimages(res));
    productdetailService.list().then((res) => setProductdetails(res));
  };

  const handleChange = (e) => {
    const imagesArray = [];
    for (let i = 0; i < e.target.files.length; i++) {
      if (fileValidate(e.target.files[i])) {
        imagesArray.push(e.target.files[i]);
      }
    }
    setImages(imagesArray);
  };

  const showModalHandler = (e, id) => {
    setMessage("");

    if (e) e.preventDefault();
    if (id > 0) {
      setProduct({
        product: { PRO_ID: 0 },
        detail: [{ SKU: "" }, {}, {}, {}],
      });

      productService.getDetail(id).then((res) => setProduct(res));
      handleModalShow();
    } else {
      setProduct({
        product: { PRO_ID: 0 },
        detail: [{}, {}, {}, {}],
      });
      setMessage("");
      handleModalShow();
    }
  };

  const handSave = (e, id) => {
    const sizes = [
      proSizeS.current.value,
      proSizeM.current.value,
      proSizeL.current.value,
      proSizeXL.current.value,
    ];
    const sizeName = ["S", "M", "L", "XL"];
    if (product.product.PRO_ID === 0) {
      if (checkNull()) {
        productService
          .add({
            Name: proName.current.value,
            Color: proColor.current.value,
            Price: proPrice.current.value,
            DES: proDES.current.value,
            CATE_ID: proCate.current.value,
          })
          .then((res) => {
            images.map((image, index) => {
              const fData = new FormData();
              fData.append("PRO_ID", res.PRO_ID);
              fData.append("Image", image);
              axios
                .post(
                  "http://localhost/clothes-stores-online-db/public/api/image",
                  fData
                )
                .then((res) => {});
            });
            sizeName.map((size, index) => {
              productdetail
                .add({
                  PRO_ID: res.PRO_ID,
                  SKU: `"AT"${proCate.current.value}${res.PRO_ID}-${sizeName[index]}`,
                  Size: size,
                  Quantity: sizes[index],
                })
                .then((res) => {});
            });
            setImages("");
            loadData();
            toast.success("Add successful");
            handleModalClose();

            setMessage("");
          });
      } else {
        setMessage("Check the information again!!");
      }
    } else {
      if (checkNull()) {
        productService
          .update(product.product.PRO_ID, {
            Name: proName.current.value,
            Color: proColor.current.value,
            Price: proPrice.current.value,
            DES: proDES.current.value,
            CATE_ID: proCate.current.value,
          })
          .then((res) => {
            product.detail.map((detail, index) => {
              productdetailService
                .update(detail.PDETAIL_ID, {
                  PRO_ID: product.product.PRO_ID,
                  SKU: `"AT"${proCate.current.value}${res.PRO_ID}-${sizeName[index]}`,
                  Size: sizeName[index],
                  Quantity: sizes[index],
                })
                .then((res) => {});
            });
            product.image.map((uimage, index) => {
              console.log(uimage);
              const fData = new FormData();
              fData.append("PRO_ID", product.product.PRO_ID);
              fData.append("Image", images[index]);
              axios
                .post(
                  `http://localhost/clothes-stores-online-db/public/api/image/${uimage.IMG_ID}`,
                  fData
                )
                .then((res) => {
                  console.log(res);
                  setImages("");
                  loadData();
                  toast.success("Update successful");
                  handleModalClose();

                  setMessage("");
                });
            });
          });
      } else {
        setMessage("Check the information again!!");
      }
    }
  };

  const fileValidate = (file) => {
    if (
      file.type === "image/png" ||
      file.type === "image/jpg" ||
      file.type === "image/jpeg"
    ) {
      return true;
    } else {
      return false;
    }
  };

  const deleteHandler = (e, id) => {
    e.preventDefault();
    imageService.remove(id).then((res) => console.log(res));
    productdetailService.remove(id).then((res) => {
      productService.remove(id).then((res) => {
        toast.warn("Delete successcful");
        loadData();
      });
    });
  };

  const checkNull = () => {
    if (
      proName.current.value === "" ||
      proPrice.current.value === "" ||
      proColor.current.value === "" ||
      proSizeS.current.value === "" ||
      proSizeM.current.value === "" ||
      proSizeL.current.value === "" ||
      proSizeXL.current.value === "" ||
      proDES.current.value === "" ||
      images.length === 0
    )
      return false;
    else return true;
  };

  return (
    <>
      {/* <Header /> */}
      <div>
        <div className="container-fuild mt-4">
          {/*   table */}
          <div className="card border-dark bt-5">
            <div className="card-header">
              <div className="row">
                <div className="col">
                  <h3 className="card-title">
                    Product <small className="text-muted">list</small>
                  </h3>
                </div>
                <div className="col-auto">
                  <Button
                    type="button"
                    variant="dark"
                    onClick={(e) => showModalHandler(e, 0)}
                  >
                    <i class="fa-solid fa-plus"></i> Add
                  </Button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered border-dark table-hover table-striped">
                  <thead>
                    <tr className="table-dark border-dark">
                      <th style={{ width: 50 }}>#</th>
                      <th>Loại</th>
                      <th>Name</th>
                      <th>Color</th>
                      <th>Price </th>
                      <th>Size S</th>
                      <th>Size M</th>
                      <th>Size L</th>
                      <th>Size XL</th>
                      <th style={{ width: 50 }}>Image</th>
                      <th>Create_at</th>
                      <th>Update_at</th>
                      <th style={{ width: 80 }} />
                    </tr>
                  </thead>
                  <tbody className="table table-striped table-dark">
                    {products.map((product, index) => {
                      return (
                        <>
                          <tr key={product.PRO_ID}>
                            <td className="fw-bolder">{index + 1}</td>
                            {categorys.map((cate, index) => {
                              if (product.CATE_ID === cate.CATE_ID) {
                                return (
                                  <>
                                    <td>{cate.Name}</td>
                                  </>
                                );
                              }
                            })}
                            <td className="fw-bolder text-nowrap">
                              {product.Name}
                            </td>
                            <td>{product.Color}</td>
                            <td>{product.Price}</td>
                            {tmpSize.map((size) => {
                              return producdetails.map((detail, index) => {
                                if (
                                  detail.PRO_ID === product.PRO_ID &&
                                  detail.Size === size
                                )
                                  return (
                                    <>
                                      <td>{detail.Quantity}</td>
                                    </>
                                  );
                              });
                            })}

                            <td className=" text-nowrap justify-content-center">
                              {dimages.map((dimage, index) => {
                                if (dimage.PRO_ID === product.PRO_ID) {
                                  return (
                                    <>
                                      <img
                                        className=" img-table"
                                        src={`http://localhost/clothes-stores-online-db/public/uploads/images/${dimage.Image}`}
                                      />
                                    </>
                                  );
                                }
                              })}
                            </td>
                            <td>{product.create_at}</td>
                            <td>{product.update_at}</td>
                            {/* <td>{getImage(product.PRO_ID)}</td> */}
                            <td
                              className="d-flex justify-content-evenly py-4 "
                              style={{ height: 170 }}
                            >
                              <a
                                href="#"
                                onClick={(e) =>
                                  showModalHandler(e, product.PRO_ID)
                                }
                              >
                                <i class="fa-solid fa-pen-to-square text-black"></i>
                              </a>
                              <a
                                href="#"
                                onClick={(e) =>
                                  deleteHandler(e, product.PRO_ID)
                                }
                              >
                                <i class="fa-solid fa-trash text-danger"></i>
                              </a>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <Modal
          show={modalShow}
          onHide={handleModalClose}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Thêm sản phẩm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <h5 className="text-center text-danger">{message}</h5>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-floating mb-3">
                    <select ref={proCate} className="form-select">
                      {categorys.map((cate, index) => {
                        return (
                          <>
                            <option value={cate.CATE_ID}>{cate.Name}</option>
                          </>
                        );
                      })}
                    </select>
                    <label className="floatingSelect">Chọn loại</label>
                    {""}
                  </div>
                </div>
                <div className="col-md-6">
                  <input
                    ref={proName}
                    type="text"
                    className="form-control mb-3"
                    placeholder="Tên"
                    defaultValue={product.product.Name}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    ref={proPrice}
                    type="number"
                    className="form-control mb-3"
                    placeholder="Giá"
                    defaultValue={product.product.Price}
                  />
                </div>
                <div className="col-md-12">
                  <div className="form-floating mb-3">
                    <select ref={proColor} className="form-select">
                      <option value="Black">Đen</option>
                      <option value="White">Trắng</option>
                      <option value="Blue">Xanh</option>
                      <option value="Red">Đỏ</option>
                      <option value="Pink">Hồng</option>
                    </select>
                    <label className="floatingSelect">Chọn màu</label>
                    {""}
                  </div>
                </div>

                <div className="col-md-12">
                  <label htmlFor="formFileMultiple" className="form-label">
                    <span className="fw-bolder">Hình</span> |{" "}
                    <span className="fw-bolder text-primary">4</span> Hình | PNG
                    | JPG | JPEG |
                  </label>
                  {""}
                  <input
                    onChange={handleChange}
                    className="form-control mb-3"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                </div>
                <div className="row mb-3 justify-content-between">
                  <div className="col-md-3">
                    <div className="form-floating">
                      <input
                        ref={proSizeS}
                        type="number"
                        className="form-control"
                        id="floatingInputValue"
                        min="1"
                        defaultValue={product.detail[0].Quantity}
                      />
                      <label htmlFor="floatingInputValue">Size S</label>
                      {""}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-floating">
                      <input
                        ref={proSizeM}
                        type="number"
                        className="form-control"
                        id="floatingInputValue"
                        min="1"
                        defaultValue={product.detail[1].Quantity}
                      />
                      <label htmlFor="floatingInputValue">Size M</label>
                      {""}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div class="form-floating">
                      <input
                        defaultValue={product.detail[2].Quantity}
                        ref={proSizeL}
                        type="number"
                        className="form-control"
                        id="floatingInputValue"
                        min="1"
                      />
                      <label htmlFor="floatingInputValue">Size L</label>
                      {""}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-floating">
                      <input
                        defaultValue={product.detail[3].Quantity}
                        ref={proSizeXL}
                        type="number"
                        className="form-control"
                        id="floatingInputValue"
                        min="1"
                      />
                      <label htmlFor="floatingInputValue">Size XL</label>
                      {""}
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  {""}
                  <textarea
                    ref={proDES}
                    className="comments"
                    style={{ background: "#fff", width: "100%", height: 250 }}
                    placeholder="Mô tả"
                    defaultValue={product.product.DES}
                  />
                </div>
              </div>
              <hr />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
            <Button variant="dark" onClick={() => handSave()}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Products;

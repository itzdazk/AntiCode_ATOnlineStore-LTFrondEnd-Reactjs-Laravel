import React, { useState, useEffect, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import categoryService from "../../services/categoryService";

const Categorys = (props) => {
  const [message, setMessage] = useState();
  const [categorys, setCategorys] = useState([]);
  const [category, setCategory] = useState({ Name: "", Image: "" });
  const [modalShow, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const [image, setImage] = useState();
  const categoryName = useRef("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    categoryService.list().then((res) => setCategorys(res));
  };

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const showModalHandler = (e, id) => {
    setMessage("");
    if (e) e.preventDefault();
    if (id > 0) {
      setCategory({ CATE_ID: 0 });
      categoryService.get(id).then((res) => setCategory(res));
      handleModalShow();
    } else {
      setCategory({ CATE_ID: 0 });
      setMessage("");
      handleModalShow();
    }
  };

  const handSave = () => {
    if (category.CATE_ID === 0) {
      setMessage("");
      setCategory("");
      handleModalShow();
      if (categoryName.current.value !== "" && fileValidate(image)) {
        const fData = new FormData();
        fData.append("Name", categoryName.current.value);
        fData.append("Image", image);
        axios
          .post(
            "http://localhost/clothes-stores-online-db/public/api/category",
            fData
          )
          .then((res) => {
            setImage("");
            loadData();
            toast.success("Add successful");
            handleModalClose();
            setMessage("");
          });
      } else {
        setMessage("Check the information again!!");
      }
    } else {
      if (categoryName.current.value !== "" && fileValidate(image)) {
        const fData1 = new FormData();
        fData1.append("Name", categoryName.current.value);
        fData1.append("Image", image);
        axios
          .post(
            `http://localhost/clothes-stores-online-db/public/api/category/${category.CATE_ID}`,
            fData1
          )
          .then((res) => {
            setImage("");
            loadData();
            toast.success("Update successful");
            handleModalClose();
            setMessage("");
          });
      } else {
        setMessage("Check the information again!!");
      }
    }
  };

  const handDelete = (e, id) => {
    e.preventDefault();
    console.log(id);
    categoryService.remove(id).then((res) => {
      if (res.CATE_ID === id) {
        toast.warn("Delete successcful");
        loadData();
      } else {
        toast.warn("Delete fail");
      }
    });
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

  return (
    <>
      {/* <Header /> */}
      <div>
        <div className="container mt-4">
          {/*   table */}
          <div className="card border-dark bt-5">
            <div className="card-header">
              <div className="row">
                <div className="col">
                  <h3 className="card-title">
                    Category <small className="text-muted">list</small>
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
                      <th>Name</th>
                      <th>Wallpaper</th>
                      <th>Creat At</th>
                      <th>Update At</th>
                      <th style={{ width: 80 }} />
                    </tr>
                  </thead>
                  <tbody className="table table-striped table-dark">
                    {categorys.map((Category, index) => {
                      return (
                        <>
                          <tr key={Category.CATE_ID}>
                            <td className="fw-bolder">{index + 1}</td>
                            <td className="fw-bolder">{Category.Name}</td>
                            <td>
                              <img
                                className="img-fluid img-table"
                                src={`http://localhost/clothes-stores-online-db/public/uploads/cateImages/${Category.Image}`}
                              ></img>
                            </td>
                            <td>{Category.create_at}</td>
                            <td>{Category.update_at}</td>
                            <td className="d-flex justify-content-evenly py-4">
                              <a
                                href="#"
                                onClick={(e) =>
                                  showModalHandler(e, Category.CATE_ID)
                                }
                              >
                                <i class="fa-solid fa-pen-to-square text-secondary"></i>
                              </a>
                              <a
                                href="#"
                                onClick={(e) => handDelete(e, Category.CATE_ID)}
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
            <Modal.Title>Thêm loại sản phẩm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <h5 className="text-center text-danger">{message}</h5>
              <input
                ref={categoryName}
                type="text"
                className="form-control my-3"
                placeholder="Tên"
                defaultValue={category.Name}
                required
              />

              {category.CATE_ID === 0 ? (
                ""
              ) : (
                <img
                  src={`http://localhost/clothes-stores-online-db/public/uploads/cateImages/${category.Image}`}
                  className="img-fluid"
                />
              )}

              <label className="mt-3">
                <span className="fw-bolder">
                  {category.Cate_ID === 0 ? "Thêm " : "Cập nhật "}Hình nền
                </span>{" "}
                | JPG | JPG | JPEG{" "}
              </label>
              <input
                onChange={handleChange}
                type="file"
                className="form-control my-3"
                placeholder="Tên"
                required
              />
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

export default Categorys;

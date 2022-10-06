import React from "react";
import Constants from "../Constants";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

const ImagePreview = ({ images }) => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <img
        className="img-fluid"
        alt="Preview"
        src={Constants.baseUrl(`uploads/${images[0].image_name}`)}
      />
      <a
        className="link-dark m-2"
        href={Constants.baseUrl(`uploads/${images[0].image_name}`)}
        download
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-solid fa-download"></i>
      </a>
      <span className="link-dark m-2">
        <i class="far fa-search-plus" onClick={handleShow}></i>
      </span>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Carousel>
            {images.map((image, index) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Constants.baseUrl(`uploads/${image.image_name}`)}
                    alt={image.image_name}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ImagePreview;

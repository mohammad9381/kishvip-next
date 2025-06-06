import React from "react";
import { Modal, Button } from "react-bootstrap";

const ReactModal = (props) => {
  const { show, title, titleClose, titleSave, size, closeModal } = props;

  const handleClose = () => {
    closeModal();
  };

  const selectSize = size ? size : "";

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size={selectSize}
        className={"mt-5"}
      >
        {title !== null ? (
          <Modal.Header closeButton className={"modalHeaderCss"}>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        ) : (
          ""
        )}
        <Modal.Body>{props.children}</Modal.Body>

        {titleClose === null && titleSave === null ? (
          ""
        ) : (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              {titleClose}
            </Button>
            <Button variant="primary" onClick={handleClose}>
              {titleSave}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};

export default ReactModal;

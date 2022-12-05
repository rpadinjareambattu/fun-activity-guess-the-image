import { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "./index.module.scss";
import Modal from "react-bootstrap/Modal";
const BsModal = ({ data, showModal, hideModal }: any) => {
  const [showText, setShowText] = useState(false);
  return (
    <Modal
      show={showModal}
      onHide={() => {
        setShowText(false);
        hideModal();
      }}
      size="xl"
      centered={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className={styles.modal__body}>
          {!showText ? (
            <figure className={styles.modal__figure}>
              <img className={styles.modal__img} src={data?.imgUrl} />
            </figure>
          ) : (
            <div className={styles.modal__content}>
              <p>{data?.qno}</p>
              <p>{data?.answer}</p>
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        {showText && (
          <Button variant="primary" onClick={() => setShowText(false)}>
            Back
          </Button>
        )}
        <Button variant="primary" onClick={() => setShowText(true)}>
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default BsModal;

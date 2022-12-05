import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "./index.module.scss";
import Modal from "react-bootstrap/Modal";
import Lottie from "lottie-react";
import animationData from "../../assets/lotties/74659-confetti-day.json";

const BsModal = ({ data, showModal, hideModal }: any) => {
  let timer = 3;
  const [showText, setShowText] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    if (showText === true) {
      timeLeft > 0 && setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }
  }, [showText, timeLeft]);

  return (
    <Modal
      show={showModal}
      onHide={() => {
        setShowText(false);
        hideModal();
        setTimeLeft(timer);
      }}
      size="xl"
      centered={true}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className={styles.modal__lottie}>
          {timeLeft === 0 ? <Lottie animationData={animationData} /> : null}
        </div>

        <div className={styles.modal__body}>
          <figure className={styles.modal__figure}>
            <img className={styles.modal__img} src={data?.imgUrl} />
          </figure>
          {showText && (
            <div className={styles.modal__content}>
              {timeLeft === 0 ? <p>{data?.answer}</p> : null}

              <p>{timeLeft > 0 ? timeLeft : null}</p>
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        {showText ? (
          <Button
            variant="primary"
            onClick={() => {
              setShowText(false);
              hideModal();
            }}>
            Close
          </Button>
        ) : (
          <Button variant="primary" onClick={() => setShowText(true)}>
            Next
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};
export default BsModal;

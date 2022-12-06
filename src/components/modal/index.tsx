import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "./index.module.scss";
import Modal from "react-bootstrap/Modal";
import Lottie from "react-lottie";
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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Modal
      show={showModal}
      backdrop="static"
      onHide={() => {
        setTimeLeft(timer);
        setShowText(false);
        hideModal();

        console.log(timer);
      }}
      size="xl"
      centered={true}>
      <Modal.Header closeButton={timeLeft > 0 ? false : true}>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className={styles.modal__lottie}>
          {timeLeft === 0 ? (
            <Lottie options={defaultOptions} height={400} width={400} />
          ) : null}
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
            className={`${timeLeft > 0 ? "disabled" : ""}`}
            onClick={() => {
              setTimeLeft(timer);
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

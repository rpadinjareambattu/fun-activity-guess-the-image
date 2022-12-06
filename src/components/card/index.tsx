import styles from "./index.module.scss";

const ImageCard = (props: any) => {
  // console.log("props", props.itemDisabled);
  return (
    <div className="col-md-3 mb-4">
      <div className={`${styles.imagecard__img} ${props.itemDisabled ? styles.imagecard_disabled : null}`} onClick={props.handleCardClick}>
        <img className="img-fluid" src={props.imgsrc} />
        <span className={styles.imagecard__count}>{props.itemno}</span>
      </div>
    </div>
  );
};

export default ImageCard;

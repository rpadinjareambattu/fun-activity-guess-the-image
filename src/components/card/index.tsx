import React from "react";
import styles from "./index.module.scss";

const ImageCard = (props: any) => {
  return (
    <div className="col-md-3">
      <div className={styles.imagecard__img}>
        <img className="img-fluid" src={props.imgsrc} />
        <span className={styles.imagecard__count}>{props.itemno}</span>
      </div>
    </div>
  );
};

export default ImageCard;

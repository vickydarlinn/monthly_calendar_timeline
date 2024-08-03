/* eslint-disable react/prop-types */
import styles from "./Modal.module.css";
import Button from "../button";

const Modal = ({ onSubmit, onClose, title, children, actionText }) => {
  return (
    <div className={styles.overlay} aria-modal="true" role="dialog">
      <div className={styles.content_wrapper}>
        <h3 className={styles.heading}>{title}</h3>
        <div className={styles.content}>{children}</div>
        <div className={styles.button_container}>
          <Button
            buttonText="Cancel"
            backgroundColor="white"
            textColor="black"
            customStyle={{
              width: "150px",
              border: "1px solid black",
            }}
            onClick={onClose}
          />

          <Button
            buttonText={actionText}
            backgroundColor="black"
            textColor="white"
            customStyle={{
              width: "150px",
              border: "1px solid black",
            }}
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;

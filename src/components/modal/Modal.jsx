/* eslint-disable react/prop-types */
import styles from "./Modal.module.css";

const Modal = ({ onSubmit, onClose, title, children }) => {
  return (
    <div className={styles.overlay} aria-modal="true" role="dialog">
      <div className={styles.content_wrapper}>
        <h3>{title}</h3>
        <div>{children}</div>
        <div className={styles.button_container}>
          <button onClick={onClose} className={styles.closeButton}>
            Cancel
          </button>
          <button onClick={onSubmit} className={styles.createButton}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

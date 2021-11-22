import classes from "../styles/modal.module.scss";

const Modal = (props) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.modal_frame}>
        <div className={classes.modal_container}>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;

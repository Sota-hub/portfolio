import classes from "../../styles/closed.module.scss";

const Closed = ({message}) => {
  return (
    <div className={classes.container}>
      <p>{message}</p>
    </div>
  )
}

export default Closed;
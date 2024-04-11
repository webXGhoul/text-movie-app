import { useNavigate } from "react-router-dom";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  const navigate = useNavigate();
  const handleCLick = () => navigate(-1);
  return (
    <div>
      <h1 className={styles.error__title}>Error :(</h1>
      <button onClick={handleCLick}>Try Again</button>
    </div>
  );
};

export default ErrorMessage;

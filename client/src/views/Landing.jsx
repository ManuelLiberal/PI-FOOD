import style from "./Landing.module.css";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/home");
  };
  return (
    <div className={style.landing}>
      <div className={style.button} onClick={handleClick}>
        <h2 className={style.button_name}>INGRESAR</h2>
      </div>
    </div>
  );
};
export default Landing;

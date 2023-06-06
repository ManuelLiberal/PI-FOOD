//?---------IMPORTACIONES----------
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Card.module.css";
import Diets from "../Diets/Diets";

const Card = ({ id, title, image, dietsApi, dietsDbb }) => {
  const linkImageDbb =
    "https://media.istockphoto.com/id/910234758/es/vector/se%C3%B1al-de-corte-de-alimentos.jpg?s=612x612&w=0&k=20&c=c5YCIouZo2toL2mn0ESDSO5OcxgDnDRhr5FWBNxBNlc=";

  return (
    <div className={style.container}>
      <Link to={`/detail/${id}`}>
        <h2 className={style.title}>{title}</h2>
      </Link>
      {Number(id) ? (
        <img src={image} alt={`${id}.img`} className={style.img} />
      ) : (
        <img src={linkImageDbb} alt={`${id}.img`} className={style.img} />
      )}

      <Diets dietsApi={dietsApi} dietsDbb={dietsDbb} />
      <Link to={`/detail/${id}`}>
        <div className={style.info_container}>
          <h3 className={style.info_title}>DETAIL</h3>
        </div>
      </Link>
    </div>
  );
};
export default Card;

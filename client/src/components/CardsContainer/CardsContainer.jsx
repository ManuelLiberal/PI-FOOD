import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useEffect, useState } from "react";
import FiltersAndOrders from "../Filters&Orders/Filters&Orders";
const CardsContainer = ({ recipes }) => {
  //?--------PAGINADO---------

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 9;

  const pageCount = Math.ceil(recipes?.length / cardsPerPage);
  const paginatedCards = recipes?.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );
  const resetCurrentPage = () => {
    setCurrentPage(0);
  };
  useEffect(() => {
    resetCurrentPage();
  }, [recipes]);
  //?--------HANDLERS--------
  const handleNextClick = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <FiltersAndOrders resetCurrentPage={resetCurrentPage} />
      <div className={style.container}>
        {paginatedCards.map(({ id, title, image, diets, Diets }) => {
          return (
            <Card
              key={id}
              id={id}
              title={title}
              image={image}
              dietsApi={diets}
              dietsDbb={Diets}
            />
          );
        })}
      </div>
      <div className="handlePageContainer">
        <button
          className={style.button}
          disabled={currentPage === 0}
          onClick={handlePrevClick}
        >
          {"<"}
        </button>
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            className={style.button}
            key={index}
            disabled={currentPage === index}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === pageCount - 1}
          onClick={handleNextClick}
          className={style.button}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
export default CardsContainer;

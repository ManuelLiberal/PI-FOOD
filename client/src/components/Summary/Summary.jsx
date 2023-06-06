import style from "../Detail/Detail.module.css";

const Summary = ({ summary }) => {
  //hay que cambiar summary
  return (
    <div>
      <p className={style.subtitle}>Summary</p>
      <section>
        <p dangerouslySetInnerHTML={{ __html: summary }}></p>
      </section>
    </div>
  );
};

export default Summary;

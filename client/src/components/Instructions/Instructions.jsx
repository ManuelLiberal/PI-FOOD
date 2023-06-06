import style from "./Instructions.module.css";
//?---------------FUNCIÓN-------------------

const Instructions = ({ steps }) => {
  return (
    <div>
      <h2 className={style.subtitle}>Steps</h2>
      {typeof steps === "object" ? (
        <div>
          <ol>
            {steps.map((step) => {
              return <li>{step}</li>;
            })}
          </ol>
        </div>
      ) : (
        <p>{steps}</p>
      )}
    </div>
  );
};
export default Instructions;

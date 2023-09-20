import "./Card.css";
import Button from "./Button";

export default function Card(props) {
  return (
    <div className="card">
      <div className="image-container">
        <img className={props.classNameImage} src={props.src} alt={props.alt} />
      </div>
      <div className="card_content">
        <h2>{props.title}</h2>
        <div className="category-buttons">
          {props.category.map((item, index) => (
            <Button
              key={index}
              classNameBtn="btn"
              href={Object.values(item)[0]} // Get the URL from the category object
              label={Object.keys(item)[0]} // Get the label from the category object
            />
          ))}
        </div>
      </div>
    </div>
  );
}

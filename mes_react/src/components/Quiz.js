import Navbar from "./Navbar";
import Card from "./Card";
import "./Quiz.css";

import quizData from "../datas/QuizData";

export default function Quiz() {
  return (
    <>
      <Navbar />
      <section className="quiz">
        {quizData.map((item, index) => (
          <Card
            key={index}
            classNameImage="image"
            src={item.image}
            alt={`Level ${item.level} Image`}
            title={item.level}
            category={item.category}
          />
        ))}
      </section>
    </>
  );
}

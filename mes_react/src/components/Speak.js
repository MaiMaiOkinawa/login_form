import Navbar from "./Navbar";
import Card from "./Card";
import "./Speak.css";

import materialData from "../datas/MaterialData";

export default function Speak() {
  return (
    <>
      <Navbar />
      <section className="speak">
        {materialData.map((item, index) => (
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

import Navbar from "./Navbar";
import Card from "./Card";
import "./Read.css";
import ReadMaterialData from "../datas/ReadMaterialData";
import { Document } from "react-pdf";

export default function Read() {
  return (
    <>
      <Navbar />
      <section className="read">
        {ReadMaterialData.map((item, index) => (
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
      <section className="pdf">
        <div className="pdf-container">
          <h2>Level 1 Story</h2>
        </div>
      </section>
    </>
  );
}

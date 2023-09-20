import "./Home.css";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="hero-container">
          <p className="claim">Speak Read Grow Together</p>
        </div>
      </section>
    </>
  );
}

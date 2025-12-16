import { useState } from "react";
import { personagens } from "../data";
import Footer from "../components/Footer";

const formatNumber = (value) => {
  if (typeof value === "string") return value;
  return value.toLocaleString("pt-BR");
};

export default function Home({ search }) {
  const [activeCard, setActiveCard] = useState(null);

  const filtered = personagens.filter((p) =>
    p.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <main onTouchStart={() => setActiveCard(null)}>
        {filtered.map((p, index) => (
          <div
            key={p.id}
            className="card"
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
            onTouchStart={(e) => {
              e.stopPropagation();
              setActiveCard(index);
            }}
          >
            <div className="img-container">
              <img
                src={p.imagem}
                alt={p.nome}
                className={activeCard === index ? "hovered" : ""}
              />
            </div>

            <h2>{p.nome}</h2>
            <p>Raça: {p.raca}</p>

            <p>Ki Inicial: {formatNumber(p.ki)}</p>

            {p.kiMaximo && (
              <p>Ki Máximo: {formatNumber(p.kiMaximo)}</p>
            )}
          </div>
        ))}
      </main>

      <Footer />
    </>
  );
}

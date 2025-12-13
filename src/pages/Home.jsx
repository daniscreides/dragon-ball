import { personagens } from "../data";
import Footer from "../components/Footer";

export default function Home({ search }) {
  const filtered = personagens.filter((p) =>
    p.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <main>
        {filtered.map((p) => (
          <div key={p.id} className="card">
            <div className="img-container">
              <img src={p.imagem} alt={p.nome} />
            </div>
            <h2>{p.nome}</h2>
            <p>Raça: {p.raca}</p>
            <p>Ki: {p.ki}</p>
          </div>
        ))}
      </main>

      <Footer />
    </>
  );
}

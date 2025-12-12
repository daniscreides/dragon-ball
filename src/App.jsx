import React, { useState } from "react";
import { personagens } from "./data.js";
import "./style.css";
import logo from "./assets/imagens/logo.png";
import githubImg from "./assets/imagens/github.png";
import linkedinImg from "./assets/imagens/linkedin.png";
import emailImg from "./assets/imagens/email.png";

// Componente da página Sobre
function Sobre() {
  return (
    <main className="sobre-page">
      <h1>Sobre o Site</h1>
      <p>
        Site desenvolvido durante curso front-end como projeto de conclusão de curso. O objetivo do site é apresentar personagens do universo Dragon Ball de forma interativa e visualmente atraente.
      </p>
    </main>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [sobre, setSobre] = useState(false);

  const filtered = personagens.filter((p) =>
    p.nome.toLowerCase().includes(search.toLowerCase())
  );

  // Rolagem suave para o topo
  const scrollToTop = () => {
    if (sobre) setSobre(false);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  };

  // Rolagem suave até o footer
  const scrollToFooter = () => {
    if (sobre) setSobre(false);
    setTimeout(() => {
      const footer = document.querySelector("footer");
      if (footer) footer.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div>
      {/* Header fixo */}
      <header>
        <img src={logo} alt="Logo Dragon Ball" className="logo" />
        <nav className="menu">
          <button onClick={scrollToTop}>INÍCIO</button>
          <button onClick={() => setSobre(true)}>SOBRE</button>
          <button onClick={scrollToFooter}>CONTATO</button>
        </nav>
        <input
          type="text"
          id="pesquisa"
          placeholder="Pesquisar personagem..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      {/* Conteúdo da página */}
      {sobre ? (
        <Sobre />
      ) : (
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

          {/* Footer apenas na página principal */}
          <footer>
            <div className="footer-icons">
              <a href="https://github.com/daniscreides" target="_blank" rel="noopener noreferrer">
                <img src={githubImg} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/daniscreides" target="_blank" rel="noopener noreferrer">
                <img src={linkedinImg} alt="LinkedIn" />
              </a>
              <a href="mailto:danielisouza436@gmail.com">
                <img src={emailImg} alt="Email" />
              </a>
            </div>
            <p className="developer">Desenvolvido por Daniscreides</p>
            <p className="copyright">2025 Personagens Dragon Ball</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;

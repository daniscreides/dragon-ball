import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/imagens/logo.png";

export default function Header({ search, setSearch }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const irInicio = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const irContato = () => {
    navigate("/");
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header>
      <img
        src={logo}
        alt="Logo Dragon Ball"
        className="logo"
        onClick={irInicio}
      />

      <nav
        className={`menu ${menuOpen ? "active" : ""} ${
          location.pathname === "/sobre" ? "menu-sobre" : ""
        }`}
      >
        <button onClick={irInicio}>INÍCIO</button>

        {location.pathname === "/" && (
          <>
            <button onClick={() => navigate("/sobre")}>SOBRE</button>
            <button onClick={irContato}>CONTATO</button>
          </>
        )}
      </nav>


      {location.pathname === "/" && (
        <input
          id="pesquisa"
          placeholder="Pesquisar personagem..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}

      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        role="button"
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

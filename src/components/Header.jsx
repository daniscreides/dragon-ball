import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/imagens/logo.png";

export default function Header({ search, setSearch }) {
  const navigate = useNavigate();
  const location = useLocation();

  const irInicio = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const irContato = () => {
    navigate("/");
    setTimeout(() => {
      document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header>
      <img src={logo} alt="Logo Dragon Ball" className="logo" />

      <nav className="menu">
        <button onClick={irInicio}>INÍCIO</button>
        <button onClick={() => navigate("/sobre")}>SOBRE</button>

        {location.pathname === "/" && (
          <button onClick={irContato}>CONTATO</button>
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
    </header>
  );
}

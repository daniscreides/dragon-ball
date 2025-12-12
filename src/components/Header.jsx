import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/imagens/logo.png";

export default function Header({ onInicioClick, onContatoClick, search, setSearch }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleInicio = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(onInicioClick, 100); // espera para rolar após renderizar
    } else {
      onInicioClick();
    }
  };

  return (
    <header>
      <img src={logo} alt="Logo Dragon Ball" className="logo" />
      <nav className="menu">
        <button onClick={handleInicio}>INÍCIO</button>
        <button onClick={() => navigate("/sobre")}>SOBRE</button>
        {location.pathname === "/" && (
          <button onClick={onContatoClick}>CONTATO</button>
        )}
      </nav>
      {location.pathname === "/" && (
        <input
          type="text"
          id="pesquisa"
          placeholder="Pesquisar personagem..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
    </header>
  );
}

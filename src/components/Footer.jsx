import React from "react";
import github from "../assets/imagens/github.png";
import linkedin from "../assets/imagens/linkedin.png";
import email from "../assets/imagens/email.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <a href="https://github.com/daniscreides" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/daniscreides" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="mailto:danielisouza436@gmail.com">
          <img src={email} alt="Email" />
        </a>
      </div>
      <p className="developer">Desenvolvido por Daniscreides</p>
      <p className="copyright">2025 Personagens Dragon Ball</p>
    </footer>
  );
}

import Header from "~/components/header";
import "./welcome.scss";

export function Welcome() {
  return (
    <>
      <section>
        <Header>
          <a className="header-link" href="/about">
            Sobre
          </a>
          <a className="header-link" href="/event">
            Evento
          </a>
          <a className="header-link" href="/regulation">
            Regulamento
          </a>
        </Header>

        <div className="welcome-container">
          <div className="info-container">
            <div className="texts">
              <p>Localização:</p>
              <p>Curitiba, Brasil</p>
            </div>
            <div className="texts">
              <p>Data:</p>
              <p>21 a 23/Novembro, 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import GeminiHelp from "~/components/gemini";
import Header from "~/components/header";
import ScrollDownIndicator from "~/components/scroll-indicator/scroll-indicator";
import "./regulation.scss";

export default function RegulationPage() {
  return (
    <>
      {/* --- SEÇÃO 1: CABEÇALHO --- */}
      <section className="regulation-page-section-one">
        <Header>
          <a className="header-link" href="/">
            Inicio
          </a>
          <a className="header-link" href="/event">
            Evento
          </a>
          <a className="header-link" href="/regulation">
            Regulamento
          </a>
        </Header>

        <div className="regulation-page-section-one-text">
          <ScrollDownIndicator />
        </div>
      </section>

      {/* --- SEÇÃO 2: GRID DE IMAGENS --- */}
      <section className="image-grid-section">
        <h2>Regulamento Técnico</h2>
        <div className="image-grid-container">
          <a href="" className="image-card motor-card">
          </a>
          <a href="" className="image-card suspensao-card">
          </a>
          <a href="" className="image-card freios-card">
          </a>
          <a href="" className="image-card gaiola-card">
          </a>
          <a href="" className="image-card combustivel-card">
          </a>
          <a href="" className="image-card reboque-card">
          </a>
        </div>
      </section>

      {/* --- SEÇÃO 3: GEMINI HELP --- */}
      <section className="regulation-page-section-three">
        <GeminiHelp />
      </section>
    </>
  );
}
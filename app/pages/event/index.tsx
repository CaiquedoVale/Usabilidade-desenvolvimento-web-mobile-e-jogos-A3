import "~/components/carousel/carousel.scss";
import GeminiHelp from "~/components/gemini";
import Header from "~/components/header";
import ScrollDownIndicator from "~/components/scroll-indicator/scroll-indicator";
import "./event.scss";

export default function EventPage() {
  return (
    <>
      <section className="event-page-section-one">
        <Header>
          <a className="header-link" href="/">
            Inicio
          </a>
          <a className="header-link" href="/about">
            Sobre
          </a>
          <a className="header-link" href="/regulation">
            Regulamento
          </a>
        </Header>

        <div className="event-page-section-one-text">
          <ScrollDownIndicator />
        </div>
      </section>

      <section className="event-page-section-two">
        <div className="baja-project-event-info">
          <div className="location-date-info">
            <div className="location">
              <p className="light-text-roboto">Localização:</p>
              <p className="regular-text-roboto">
                Centro Politécnico da Universidade Federal do Paraná, Curitiba,
                Brasil
              </p>
            </div>

            <div className="date">
              <div>
                <p className="light-text-roboto">Data:</p>
                <p className="regular-text-roboto">21 a 23 de novembro, 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="event-organization">
          <div className="container-info">
            <div>
              <p className="title">Organização:</p>
              <p className="regular-text-roboto subtitle">SAE Brasil</p>
            </div>
            <br />

            <div>
              <p className="light-text-roboto title">Participantes:</p>
              <p className="regular-text-roboto subtitle">
                Estudantes de engenharia de diversas instituições de ensino
                superior da região sul
              </p>
            </div>
            <br />
            <div>
              <p className="light-text-roboto title">Objetivo:</p>
              <p className="regular-text-roboto subtitle">
                Projetar, construir e testar veículos off road que serão
                avaliados em diversas provas
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="event-page-section-three">
        <GeminiHelp />
      </section>
    </>
  );
}

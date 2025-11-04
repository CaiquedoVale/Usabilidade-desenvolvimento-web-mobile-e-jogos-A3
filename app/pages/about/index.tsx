import Carousel from "~/components/carousel/carousel";
import "~/components/carousel/carousel.scss";
import GeminiHelp from "~/components/gemini";
import Header from "~/components/header";
import ScrollDownIndicator from "~/components/scroll-indicator/scroll-indicator";
import "./about.scss";

export default function AboutPage() {
  return (
    <>
      <section className="about-page-section-one">
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

        <div className="about-page-section-one-text">
          <ScrollDownIndicator />
        </div>
      </section>

      <section className="about-page-section-two">
        <div className="baja-project-explanation">
          <p>
            O Projeto Baja é um desafio promovido pela SAE Brasil (Sociedade de
            Engenheiros da Mobilidade) onde estudantes de engenharia projetam,
            constroem e testam protótipos de veículos off Road, culminando em
            competições. As equipes aplicam seus conhecimentos teóricos em um
            projeto prático, desenvolvendo habilidades cruciais para o mercado
            de trabalho.
          </p>
        </div>

        <div className="carousel-container">
          <Carousel
            slides={[
              <div className="card">
                <p>Histórico</p>
                <p>
                  O Baja SAE foi criado nos Estados Unidos e chegou ao Brasil em
                  1995, tornando-se um projeto tradicional nas universidades
                  brasileiras.
                </p>
              </div>,
              <div className="card">
                <p>Desafio e Objetivo</p>
                <p>
                  Desafiar estudantes a projetar, construir e testar um veículo
                  off Road, aplicando os conhecimentos adquiridos em sala de
                  aula.
                </p>
              </div>,
              <div className="card">
                <p>Competições</p>
                <p>
                  As equipes competem em provas que avaliam desde a segurança e
                  apresentação do projeto até o desempenho do veículo em
                  diferentes terrenos, incluindo uma corrida de resistência de 4
                  horas.
                </p>
              </div>,
              <div className="card">
                <p>Equipes e Regras</p>
                <p>
                  As equipes, compostas por estudantes de diferentes áreas da
                  engenharia, são regidas por um regulamento estabelecido pela
                  SAE.
                </p>
              </div>,
              <div className="card">
                <p>Aplicação Prática</p>
                <p>
                  O projeto proporciona uma experiência prática valiosa,
                  preparando os alunos para os desafios do mercado de trabalho
                  na área da engenharia.
                </p>
              </div>,
              <div className="card">
                <p>Estrutura</p>
                <p>
                  O projeto envolve diversas etapas, desde a concepção e projeto
                  até a construção e testes do protótipo, com foco em segurança,
                  desempenho e inovação.
                </p>
              </div>,
              <div className="card">
                <p>Competição Internacional</p>
                <p>
                  A equipe vencedora da competição nacional pode participar da
                  etapa internacional nos Estados Unidos.
                </p>
              </div>,
            ]}
          />
        </div>
      </section>

      <section className="about-page-section-three">
        <GeminiHelp />
      </section>
    </>
  );
}

import "./welcome.scss";

export function Welcome() {
  return (
    <>
      <section>
        {/* <Header /> */}

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

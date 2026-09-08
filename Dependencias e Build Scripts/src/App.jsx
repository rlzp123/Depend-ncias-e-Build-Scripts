import "./index.css";

function App() { going
    alert("📷 Câmera: integração nativa será feita com o Capacitor.");
  };

  const verGPS = () => {
    alert("📍 GPS: integração nativa será feita com o Capacitor.");
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <div className="brand-icon">T&T</div>

          <div>
            <strong>Dependências</strong>
            <span>Mobile Lab</span>
          </div>
        </div>

        <div className="online">
          <span></span>
          Sistema online
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">REACT_CAPACITOR</span>

            <h1>
              Da web para o
              <span> seu celular.</span>
            </h1>

            <p>
              Um projeto React moderno preparado para se transformar
              em um aplicativo mobile através do Capacitor.
            </p>

            <div className="hero-buttons">
              <button className="primary-button" onClick={abrirCamera}>
                <span>📷</span>
                Testar câmera
              </button>

              <button className="secondary-button" onClick={verGPS}>
                <span>📍</span>
                Testar GPS
              </button>
            </div>
          </div>

          <div className="phone-container">
            <div className="phone">
              <div className="phone-notch"></div>

              <div className="phone-screen">
                <div className="mini-header">
                  <span>09:41</span>
                  <span>● ● ●</span>
                </div>

                <div className="mini-orb">
                  ✦
                </div>

                <small>CAPACITOR APP</small>

                <h3>
                  Hello,
                  <br />
                  <span>mobile world.</span>
                </h3>

                <div className="mini-cards">
                  <div>
                    <span>⚛️</span>
                    React
                  </div>

                  <div>
                    <span>🌉</span>
                    Bridge
                  </div>
                </div>

                <div className="mini-status">
                  <span className="pulse"></span>
                  Native connection ready
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="stat">
            <strong>01</strong>
            <span>Interface Web</span>
          </div>

          <div className="line"></div>

          <div className="stat">
            <strong>02</strong>
            <span>Build Dist</span>
          </div>

          <div className="line"></div>

          <div className="stat">
            <strong>03</strong>
            <span>App Android</span>
          </div>
        </section>

        <section className="technology">
          <div className="section-title">
            <span>TECNOLOGIA</span>
            <h2>A ponte entre dois mundos.</h2>
            <p>
              Entenda como cada parte do projeto participa da
              transformação do seu site em aplicativo.
            </p>
          </div>

          <div className="tech-grid">
            <article className="tech-card react-card">
              <div className="card-number">01</div>
              <div className="tech-icon">⚛</div>

              <h3>React</h3>

              <p>
                É aqui que você cria a interface, componentes
                e toda a experiência visual do aplicativo.
              </p>

              <div className="path">
                <span>src/</span>
              </div>
            </article>

            <article className="tech-card web-card">
              <div className="card-number">02</div>
              <div className="tech-icon">◈</div>

              <h3>WebView</h3>

              <p>
                O aplicativo utiliza uma WebView para executar
                o conteúdo web dentro do ambiente mobile.
              </p>

              <div className="path">
                <span>dist/</span>
              </div>
            </article>

            <article className="tech-card bridge-card">
              <div className="card-number">03</div>
              <div className="tech-icon">⌁</div>

              <h3>Native Bridge</h3>

              <p>
                O Capacitor funciona como uma ponte entre
                JavaScript e os recursos nativos do aparelho.
              </p>

              <div className="path">
                <span>android/</span>
              </div>
            </article>
          </div>
        </section>

        <section className="workflow">
          <div className="workflow-text">
            <span className="section-label">COMO FUNCIONA</span>

            <h2>
              Escreva uma vez.
              <br />
              <span>Leve para o mobile.</span>
            </h2>

            <p>
              Seu código começa no React. Depois do build, os
              arquivos são preparados pelo Capacitor e enviados
              para a estrutura nativa do Android.
            </p>
          </div>

          <div className="flow">
            <div className="flow-item">
              <div className="flow-icon purple">01</div>

              <div>
                <strong>Desenvolvimento</strong>
                <span>React + CSS + JavaScript</span>
              </div>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-item">
              <div className="flow-icon blue">02</div>

              <div>
                <strong>Build</strong>
                <span>npm run build → dist/</span>
              </div>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-item">
              <div className="flow-icon green">03</div>

              <div>
                <strong>Capacitor</strong>
                <span>dist/ → Android WebView</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div>
            <span className="section-label">PRÓXIMO PASSO</span>

            <h2>
              Seu aplicativo está
              <span> começando agora.</span>
            </h2>

            <p>
              A interface está pronta. Agora entra a parte nativa
              com o Capacitor.
            </p>
          </div>

          <div className="cta-orb">✦</div>
        </section>
      </main>

      <footer>
        <div>
          <strong>Build Scripts</strong>
          <span>Projeto acadêmico</span>
        </div>

        <span>React · Vite · Capacitor</span>
      </footer>
    </div>
  );
export default App;
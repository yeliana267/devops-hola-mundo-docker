const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hola Mundo DevOps</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #050505, #12061f, #1a0b2e);
          color: white;
          overflow: hidden;
        }

        .background-glow {
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: rgba(168, 85, 247, 0.18);
          filter: blur(90px);
          top: 10%;
          left: 15%;
        }

        .background-glow.two {
          top: 55%;
          left: 65%;
          background: rgba(139, 92, 246, 0.15);
        }

        .card {
          position: relative;
          z-index: 1;
          width: 90%;
          max-width: 700px;
          padding: 50px 35px;
          text-align: center;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(14px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.45);
        }

        .badge {
          display: inline-block;
          padding: 8px 16px;
          margin-bottom: 18px;
          border-radius: 999px;
          background: rgba(168, 85, 247, 0.16);
          color: #d8b4fe;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 16px;
          color: #f5f3ff;
          text-shadow: 0 0 20px rgba(168, 85, 247, 0.35);
        }

        .highlight {
          color: #c084fc;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #d4d4d8;
          max-width: 560px;
          margin: 0 auto 28px;
        }

        .button {
          display: inline-block;
          padding: 14px 28px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: bold;
          color: white;
          background: linear-gradient(90deg, #7e22ce, #a855f7);
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .button:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 28px rgba(168, 85, 247, 0.55);
        }

        .footer {
          margin-top: 24px;
          font-size: 0.95rem;
          color: #a1a1aa;
        }

        @media (max-width: 768px) {
          .card {
            padding: 35px 20px;
          }

          h1 {
            font-size: 2.2rem;
          }

          p {
            font-size: 1rem;
          }
        }
      </style>
    </head>
    <body>
      <div class="background-glow"></div>
      <div class="background-glow two"></div>

      <div class="card">
        <div class="badge">Práctica DevOps</div>
        <h1>Hola Mundo <span class="highlight">Docker</span></h1>
        <p>
          Aplicación web sencilla creada con Node.js y desplegada dentro de un
          contenedor Docker, con un diseño moderno en tonos negros y morados.
        </p>
        <a href="#" class="button">Proyecto en ejecución</a>
        <div class="footer">Hecho por Yeliana</div>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

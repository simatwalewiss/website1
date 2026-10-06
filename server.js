const express = require("express");
const app = express();

const powers = [
  {
    icon: "⚡",
    service: "Azure Functions",
    description: "You work best under pressure and only wake up when needed."
  },
  {
    icon: "🛡️",
    service: "Azure Firewall",
    description: "You trust nobody, but everyone is safer because of you."
  },
  {
    icon: "🤖",
    service: "Azure OpenAI",
    description: "Everyone asks you questions instead of reading the documentation."
  },
  {
    icon: "🚢",
    service: "Azure Kubernetes Service",
    description: "Complicated on the inside, impressive on the outside."
  },
  {
    icon: "💾",
    service: "Azure Storage",
    description: "You remember everything."
  },
  {
    icon: "☁️",
    service: "Azure Virtual Machines",
    description: "The dependable workhorse that carries the business."
  },
  {
    icon: "🔑",
    service: "Azure Key Vault",
    description: "Keeper of secrets and protector of passwords."
  },
  {
    icon: "📊",
    service: "Microsoft Fabric",
    description: "You connect everything together and somehow make sense of it."
  }
];

app.get("/", (req, res) => {

  const power = powers[Math.floor(Math.random() * powers.length)];

  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
      <title>Azure Superpower Generator</title>

      <style>

          body{
              margin:0;
              font-family:'Segoe UI',sans-serif;
              background: linear-gradient(135deg,#0078D4,#50E6FF);
              height:100vh;
              display:flex;
              justify-content:center;
              align-items:center;
          }

          .card{
              background:white;
              padding:40px;
              border-radius:20px;
              text-align:center;
              width:700px;
              box-shadow:0 10px 25px rgba(0,0,0,.2);
          }

          h1{
              color:#0078D4;
          }

          .icon{
              font-size:80px;
          }

          .service{
              font-size:32px;
              font-weight:bold;
              color:#0078D4;
          }

          .description{
              margin-top:20px;
              font-size:20px;
              color:#444;
          }

          button{
              margin-top:30px;
              padding:15px 30px;
              border:none;
              background:#0078D4;
              color:white;
              border-radius:10px;
              cursor:pointer;
              font-size:18px;
          }

      </style>

  </head>

  <body>

      <div class="card">

          <h1>☁️ What's Your Azure Superpower?</h1>

          <div class="icon">${power.icon}</div>

          <div class="service">${power.service}</div>

          <div class="description">
              ${power.description}
          </div>

          <button onclick="window.location.reload()">
              Discover Another Superpower
          </button>

      </div>

  </body>
  </html>
  `);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
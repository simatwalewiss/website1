const express = require("express");
const app = express();

const version = "v2.0";

const facts = [
  "Azure operates in more than 60 regions worldwide.",
  "Azure Functions is serverless.",
  "Azure Storage can store exabytes of data.",
  "Azure App Service supports Node.js, .NET, Java, Python, and PHP.",
  "Microsoft Fabric unifies data and analytics workloads.",
  "Azure OpenAI provides access to powerful AI models."
];

app.get("/", (req, res) => {

    const fact = facts[Math.floor(Math.random() * facts.length)];

    res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Azure Superpower Generator</title>

<style>

body{
    margin:0;
    font-family:'Segoe UI',sans-serif;
    background:linear-gradient(135deg,#0078D4,#50E6FF);
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}

.container{
    background:white;
    width:800px;
    padding:40px;
    border-radius:20px;
    text-align:center;
    box-shadow:0 15px 40px rgba(0,0,0,.2);
}

.badge{
    display:inline-block;
    background:#16a34a;
    color:white;
    padding:8px 16px;
    border-radius:20px;
    font-weight:bold;
}

.version{
    margin-top:10px;
    color:#666;
}

.fact{
    margin-top:30px;
    background:#f3f4f6;
    padding:20px;
    border-radius:10px;
}

button{
    margin-top:20px;
    border:none;
    background:#0078D4;
    color:white;
    padding:14px 30px;
    border-radius:10px;
    font-size:18px;
    cursor:pointer;
}

button:hover{
    background:#005a9e;
}

</style>

</head>

<body>

<div class="container">

    <div class="badge">
        🚀 Successfully Deployed from GitHub
    </div>

    <h1>☁️ Azure App Service Demo</h1>

    <h2>CI/CD Test Website</h2>

    <div class="version">
        Application Version: <strong>${version}</strong>
    </div>

    <div class="version">
        Server Time: ${new Date().toUTCString()}
    </div>

    <div class="fact">
        <h3>Azure Fact of the Day</h3>
        <p>${fact}</p>
    </div>

    <button onclick="location.reload()">
        Generate New Fact
    </button>

</div>

</body>
</html>
`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Application running on port " + PORT);
});
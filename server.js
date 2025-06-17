const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public', 'boot')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "boot", "boot.html"));
});

// Serve all static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
